// Mock 3rd party libraries
jest.mock('axios')
jest.mock('axios-curlirize')
jest.mock('@actions/core')
jest.mock('@actions/github')
// Mock local files
jest.mock('../src/markdownProcessor')
jest.mock('../src/Confluence')

describe('main', () => {
  it('Stub test', () => {
    expect(true)
  })
})
