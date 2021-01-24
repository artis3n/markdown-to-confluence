import {ConfluenceApiError, ConfluenceApiGetContentByIdData} from "../../src/types/definitions";

export const getPageById: ConfluenceApiGetContentByIdData = {
    "id": "123456789",
    "type": "page",
    "status": "current",
    "title": "Markdown Test",
    "space": {
        "id": 987654321,
        "key": "TEST",
        "name": "Testing",
        "type": "global",
        "status": "current",
        "_expandable": {
            "settings": "/rest/api/space/TEST/settings",
            "metadata": "",
            "operations": "",
            "lookAndFeel": "/rest/api/settings/lookandfeel?spaceKey=TEST",
            "identifiers": "",
            "permissions": "",
            "icon": "",
            "description": "",
            "theme": "/rest/api/space/TEST/theme",
            "history": "",
            "homepage": "/rest/api/content/987654321"
        },
        "_links": {"webui": "/spaces/TEST", "self": "https://fakewiki.atlassian.net/wiki/rest/api/space/TEST"}
    },
    "history": {
        "latest": true,
        "createdBy": {
            "type": "known",
            "accountId": "5e0fexampleexampleexample",
            "accountType": "atlassian",
            "email": "wiki@mail.email",
            "publicName": "Artis3n",
            "profilePicture": {"path": "/wiki/aa-avatar/5e0fexampleexampleexample", "width": 48, "height": 48, "isDefault": false},
            "displayName": "Artis3n",
            "isExternalCollaborator": false,
            "_expandable": {"operations": "", "personalSpace": ""},
            "_links": {"self": "https://fakewiki.atlassian.net/wiki/rest/api/user?accountId=5e0fexampleexampleexample"}
        },
        "createdDate": "2021-01-13T04:50:25.609Z",
        "_expandable": {"lastUpdated": "", "previousVersion": "", "contributors": "", "nextVersion": ""},
        "_links": {"self": "https://fakewiki.atlassian.net/wiki/rest/api/content/123456789/history"}
    },
    "version": {
        "by": {
            "type": "known",
            "accountId": "5e0fexampleexampleexample",
            "accountType": "atlassian",
            "email": "wiki@mail.email",
            "publicName": "Artis3n",
            "profilePicture": {"path": "/wiki/aa-avatar/5e0fexampleexampleexample", "width": 48, "height": 48, "isDefault": false},
            "displayName": "Artis3n",
            "isExternalCollaborator": false,
            "_expandable": {"operations": "", "personalSpace": ""},
            "_links": {"self": "https://fakewiki.atlassian.net/wiki/rest/api/user?accountId=5e0fexampleexampleexample"}
        },
        "when": "2021-01-14T04:28:36.969Z",
        "friendlyWhen": "Jan 13, 2021",
        "message": "",
        "number": 8,
        "minorEdit": false,
        "syncRev": "0.confluence$content$987654321.23",
        "syncRevSource": "synchrony-ack",
        "confRev": "confluence$content$987654321.25",
        "_expandable": {"collaborators": "", "content": "/rest/api/content/987654321"},
        "_links": {"self": "https://fakewiki.atlassian.net/wiki/rest/api/content/123456789/version/8"}
    },
    "macroRenderedOutput": {},
    "extensions": {"position": 987654321},
    "_expandable": {
        "childTypes": "",
        "container": "/rest/api/space/TEST",
        "metadata": "",
        "operations": "",
        "schedulePublishDate": "",
        "children": "/rest/api/content/987654321/child",
        "restrictions": "/rest/api/content/123456789/restriction/byOperation",
        "ancestors": "",
        "body": "",
        "descendants": "/rest/api/content/987654321/descendant"
    },
    "_links": {
        "editui": "/pages/resumedraft.action?draftId=123456789",
        "webui": "/spaces/TEST/pages/987654321/Markdown+Test",
        "context": "/wiki",
        "self": "https://fakewiki.atlassian.net/wiki/rest/api/content/123456789",
        "tinyui": "/x/aaaaa",
        "collection": "/rest/api/content",
        "base": "https://fakewiki.atlassian.net/wiki"
    }
}

export const errorFromId: ConfluenceApiError = {
    "statusCode": 404,
    "data": {
        "authorized": false,
        "valid": false,
        "errors": [{"message": {"translation": "No content found with id : 212992029", "args": []}}],
        "successful": false
    },
    "message": "com.atlassian.confluence.api.service.exceptions.NotFoundException: No content found with id : 212992029"
}
