import {ReasonPhrases, StatusCodes} from "http-status-codes";

export interface MarkupConversionOptions {
    baseUrl: string
    codeTheme: string
    codeLineNumbers: boolean
}

export interface ConfluenceAuth {
    username: string
    password: string
}

export interface ConfluencePage {
    title: string
    body: string
}

export interface ConfluenceApiPostNewContentData {
    id: string
    type: string
    status: string
    title: string
    space: ConfluenceApiSpace
    history: ConfluenceApiHistory
    version: ConfluenceApiVersion
    container: ConfluenceApiSpace
    ancestors: Array<ConfluencePageAncestor>
    macroRenderedOutput: object
    body: ConfluencePageBody
    extensions: object
    _expandable: object
    _links: object
}

export interface ConfluenceApiUpdatePageContentData {
    id: string
    type: string
    status: string
    title: string
    space: ConfluenceApiSpace
    history: ConfluencePageHistory
    version: ConfluencePageVersion
    container: ConfluenceApiSpace
    body: ConfluenceApiUpdatePageContentDataBody
}

export interface ConfluenceApiUpdatePageContentDataBody {
    // Will always be 'storage' for our Confluence API calls but is not guaranteed to always be that by Confluence's general API
    [storageType: string]: {
        value: string
    }
}

export interface ConfluenceApiGetContentResponse {
    results: Array<ConfluenceApiGetContentData>
    start: number
    limit: number
    size: number
}

export interface ConfluenceApiGetContentData {
    id: string
    type: string
    status: string
    title: string
}

export interface ConfluenceApiGetContentByIdData {
    id: string
    type: string
    status: string
    title: string
    space: ConfluenceApiSpace
    history: ConfluencePageHistory
    version: ConfluencePageVersion
}

export interface ConfluenceApiError {
    statusCode: StatusCodes
    data: ConfluenceApiErrorData
    message: string
    reason?: ReasonPhrases
}

export interface ConfluenceApiErrorData {
    authorized: boolean
    valid: boolean
    allowedInReadOnlyMode?: boolean
    errors: Array<string>
    successful: boolean
}

export interface ConfluencePageAncestor {
    id: string
    type: string
    status: string
    title: string
    macroRenderedOutput: object
    extensions: object
    _expandable: object
    _links: object
}

export interface ConfluenceApiSpace {
    id: number
    key: string
    name: string
    type: string
    status: string
    _expandable: object
    _links: object
    history?: ConfluenceApiHistory
}

export interface ConfluenceApiHistory {
    latest?: boolean
    createdDate: string
    createdBy: object
    _expandable?: object
    _links?: object
}

export interface ConfluencePageHistory extends ConfluenceApiHistory {
    latest: boolean
    createdBy: ConfluenceCreatedBy
    createdDate: string
}

export interface ConfluenceCreatedBy {
    type: string
    username: string
    userKey: string
    displayName: string
}

export interface ConfluenceApiVersion {
    when: string
    message: string
    number: number
    minorEdit: boolean
    hidden?: boolean
    by: object
    friendlyWhen: string
    confRev: string
    _expandable: object
    _links: object
}

export interface ConfluencePageVersion extends ConfluenceApiVersion{
    by: ConfluenceCreatedBy
    when: string
    message: string
    number: number
    minorEdit: boolean
    hidden: boolean
}

export interface ConfluencePageBody {
    storage: ConfluencePageBodyStorage
    _expandable: object
}

export interface ConfluencePageBodyStorage {
    value: string
    representation: 'storage'
    embeddedContent: Array<any>
    _expandable: object
}

export type ConfluenceSpaceKey = string
