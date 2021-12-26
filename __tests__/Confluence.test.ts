// Mock 3rd party libraries
// jest.mock("axios"); // Don't mock axios, mock URLs with nock instead

import nock from 'nock'
import { AxiosError } from 'axios'

import { Confluence } from '../src/Confluence'

// `tsc` compiles with no problem if  "__tests__/responses/*.ts" is included in the tsconfig 'excludes.'
// Since this is a test file, we don't need it in the source directory.
// @ts-ignore
import { newPagePost } from './responses/new-page-post'
// @ts-ignore
import { newPageAlreadyExistsError } from './responses/error-new-page-already-exists'
import { ConfluenceApiError, ConfluenceApiGetContentByIdData } from '../src/types/definitions'
import {
  getContentSearchByTitle,
  noFoundResults,
  // @ts-ignore
} from './responses/get-content-search'
// @ts-ignore
import { errorFromId, getPageById } from './responses/get-content-by-id'
import {
  errorExistingVersion,
  errorPageIdNotFound,
  updatePageById,
  // @ts-ignore
} from './responses/update-content-by-id'

describe('Confluence', () => {
  describe('constructor', () => {
    it('initializes a Confluence', () => {
      const confluence = defaultConfluence()
      expect(confluence.toString()).toEqual(`${DEFAULT_URL}/${SPACEKEY}`)
    })

    it('returns the user', () => {
      const user = 'mjolnir'
      const confluence = new Confluence(DEFAULT_URL, { username: user, password: 'pass' }, 'space')
      expect(confluence.user).toEqual(user)
    })
  })

  describe('postPage', () => {
    it('posts a new page creation', async () => {
      expect.assertions(6)

      nock(DEFAULT_URL).post('/rest/api/content').reply(200, newPagePost)

      const confluence = defaultConfluence()
      const result = await confluence.postPage({
        body: '<h1>Title</h1>',
        title: 'Test page',
      })

      expect(result).not.toBeUndefined()
      expect(result.status).toEqual(200)
      expect(result.data.status).toEqual('current')
      expect(result.data.space.key).toEqual(SPACEKEY)
      expect(result.data.body.storage.value).toEqual('<h1>Title</h1>')
      expect(result.data.title).toEqual('Test page')
    })

    it('throws an error if a page has already been created', async () => {
      expect.assertions(1)

      nock(DEFAULT_URL).post('/rest/api/content').reply(400, newPageAlreadyExistsError)

      const confluence = defaultConfluence()

      await expect(
        confluence.postPage({ body: '<h1>Title</h1>', title: 'Test page' })
      ).rejects.toThrowError('Request failed with status code 400')
    })

    it('returns an error message if a page already exists', async () => {
      expect.assertions(5)

      const title = 'Test page'
      nock(DEFAULT_URL).post('/rest/api/content').reply(400, newPageAlreadyExistsError)

      const confluence = defaultConfluence()

      return confluence
        .postPage({ body: '<h1>Title</h1>', title })
        .then((res) => expect(res).toBeUndefined())
        .catch((err: AxiosError) => {
          expect(err).toHaveProperty('response')
          expect(err.response).toHaveProperty('data')
          const error: ConfluenceApiError = err.response?.data
          expect(error.statusCode).toEqual(400)
          expect(error.message).toEqual(
            expect.stringContaining(
              `A page with this title already exists: A page already exists with the title ${title} in the space with key ${SPACEKEY}`
            )
          )
          expect(error.data.successful).toBeFalsy()
        })
    })
  })

  describe('findPageByTitle', () => {
    it('finds a page given a space key and a title', async () => {
      expect.assertions(3)

      const title = 'Markdown Test'
      nock(DEFAULT_URL)
        .get('/rest/api/content')
        .query({ status: 'current', type: 'page', spaceKey: SPACEKEY, title })
        .reply(200, getContentSearchByTitle)

      const confluence = defaultConfluence()
      const result = await confluence.findPageByTitle(title)

      expect(result.status).toEqual(200)
      const data = result.data
      expect(data.results.length).toEqual(1)
      expect(data.results[0].title).toEqual(title)
    })

    it('does not error if no results are found', async () => {
      expect.assertions(2)

      const title = 'Wrong title'
      nock(DEFAULT_URL)
        .get('/rest/api/content')
        .query({ status: 'current', type: 'page', spaceKey: SPACEKEY, title })
        .reply(200, noFoundResults)

      const confluence = defaultConfluence()
      const result = await confluence.findPageByTitle(title)

      expect(result.status).toEqual(200)
      expect(result.data.results.length).toEqual(0)
    })
  })

  describe('getPageMetadataById', () => {
    it('gets the details of a page by id', async () => {
      expect.assertions(3)

      const title = 'Markdown Test'
      const id = 123456789
      nock(DEFAULT_URL)
        .get(`/rest/api/content/${id}`)
        .query({ status: 'current' })
        .reply(200, getPageById)

      const confluence = defaultConfluence()
      const result = await confluence.getPageMetadataById(id.toString())
      expect(result.status).toEqual(200)
      expect(result.data.id).toEqual(id.toString())
      expect(result.data.title).toEqual(title)
    })

    it('returns an error if a page ID is invalid', async () => {
      expect.assertions(5)

      const id = 100000000
      nock(DEFAULT_URL)
        .get(`/rest/api/content/${id}`)
        .query({ status: 'current' })
        .reply(404, errorFromId)

      const confluence = defaultConfluence()

      return confluence
        .getPageMetadataById(id.toString())
        .then((res) => expect(res).toBeUndefined())
        .catch((err: AxiosError) => {
          expect(err).toHaveProperty('response')
          expect(err.response).toHaveProperty('data')

          const error: ConfluenceApiError = err.response?.data
          expect(error.statusCode).toEqual(404)
          expect(error.data.errors.length).toEqual(1)
          expect(error.data.errors[0].message.translation).toEqual(
            expect.stringContaining('No content found with id :')
          )
        })
    })
  })

  describe('updateExistingPage', () => {
    it('updates an existing page', async () => {
      expect.assertions(3)

      const id = 123456789
      nock(DEFAULT_URL).put(`/rest/api/content/${id}`).reply(200, updatePageById)

      const confluence = defaultConfluence()
      const result = await confluence.updateExistingPage(defaultPageMetadata, {
        title: 'Markdown Test',
        body: 'To Update',
      })

      expect(result.status).toEqual(200)
      expect(result.data.title).toEqual('Markdown Test')
      expect(result.data.version.number).toEqual(9)
    })

    it('returns an error if the update version already exists', async () => {
      expect.assertions(5)

      const id = 123456789
      nock(DEFAULT_URL).put(`/rest/api/content/${id}`).reply(409, errorExistingVersion)

      const confluence = defaultConfluence()
      return confluence
        .updateExistingPage(defaultPageMetadata, {
          title: 'Markdown Test',
          body: 'To Update',
        })
        .then((res) => expect(res).toBeUndefined())
        .catch((err: AxiosError) => {
          expect(err).toHaveProperty('response')
          expect(err.response).toHaveProperty('data')

          const error: ConfluenceApiError = err.response?.data
          expect(error.statusCode).toEqual(409)
          expect(error.data.errors.length).toEqual(0)
          expect(error.message).toEqual(
            expect.stringContaining('Version must be incremented on update')
          )
        })
    })

    it('returns an error if the page ID cannot be found', async () => {
      expect.assertions(5)

      const id = 123456789
      nock(DEFAULT_URL).put(`/rest/api/content/${id}`).reply(404, errorPageIdNotFound)

      const confluence = defaultConfluence()
      return confluence
        .updateExistingPage(defaultPageMetadata, {
          title: 'Markdown Test',
          body: 'To Update',
        })
        .then((res) => expect(res).toBeUndefined())
        .catch((err: AxiosError) => {
          expect(err).toHaveProperty('response')
          expect(err.response).toHaveProperty('data')

          const error: ConfluenceApiError = err.response?.data
          expect(error.statusCode).toEqual(404)
          expect(error.data.errors.length).toEqual(0)
          expect(error.message).toEqual(
            expect.stringContaining('Could not find Content for update with id')
          )
        })
    })
  })
})

const DEFAULT_URL = 'https://myurl.com/wiki'
const USERNAME = 'myuser'
const PASSWORD = 'mypass'
const SPACEKEY = 'TEST'

function defaultConfluence(): Confluence {
  return new Confluence(DEFAULT_URL, { username: USERNAME, password: PASSWORD }, SPACEKEY)
}

const defaultPageMetadata: ConfluenceApiGetContentByIdData = {
  _expandable: {},
  _links: {},
  extensions: {},
  history: {
    latest: true,
    createdBy: {
      type: '',
      displayName: '',
    },
    createdDate: '',
  },
  id: '123456789',
  macroRenderedOutput: {},
  space: {
    id: 1,
    key: '',
    name: '',
    type: 'page',
    status: 'current',
    _expandable: {},
    _links: {},
  },
  status: '',
  title: '',
  type: '',
  version: {
    by: {
      type: '',
      displayName: '',
    },
    when: '',
    number: 1,
    minorEdit: false,
    syncRev: '',
    syncRevSource: '',
    friendlyWhen: '',
    confRev: '',
    _expandable: {},
    _links: {},
  },
}
