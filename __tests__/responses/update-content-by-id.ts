import {ConfluenceApiError, ConfluenceApiNewOrUpdatedContentData} from "../../src/types/definitions";

export const updatePageById: ConfluenceApiNewOrUpdatedContentData = {
    "id": "123456789",
    "type": "page",
    "status": "current",
    "title": "Markdown Test",
    "space": {
        "id": 987654321,
        "key": "Test",
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
        "_links": {"webui": "/spaces/GAT", "self": "https://fakewiki.atlassian.net/wiki/rest/api/space/TEST"}
    },
    "history": {
        "latest": true,
        "createdBy": {
            "type": "known",
            "accountId": "5e0fexampleexampleexample",
            "accountType": "atlassian",
            "email": "fake@mail.email",
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
            "email": "fake@mail.email",
            "publicName": "Artis3n",
            "profilePicture": {"path": "/wiki/aa-avatar/5e0fexampleexampleexample", "width": 48, "height": 48, "isDefault": false},
            "displayName": "Artis3n",
            "isExternalCollaborator": false,
            "_expandable": {"operations": "", "personalSpace": ""},
            "_links": {"self": "https://fakewiki.atlassian.net/wiki/rest/api/user?accountId=5e0fexampleexampleexample"}
        },
        "when": "2021-01-24T02:53:35.299Z",
        "friendlyWhen": "just a moment ago",
        "number": 9,
        "minorEdit": false,
        "syncRev": "0.confluence$content$123456789.23",
        "syncRevSource": "synchrony",
        "confRev": "confluence$content$123456789.27",
        "_expandable": {"collaborators": "", "content": "/rest/api/content/123456789"},
        "_links": {"self": "https://fakewiki.atlassian.net/wiki/rest/api/content/123456789/version/9"}
    },
    "ancestors": [{
        "id": "987654321",
        "type": "page",
        "status": "current",
        "title": "Test Page",
        "macroRenderedOutput": {},
        "extensions": {"position": 400},
        "_expandable": {
            "container": "/rest/api/space/TEST",
            "metadata": "",
            "restrictions": "/rest/api/content/987654321/restriction/byOperation",
            "history": "/rest/api/content/987654321/history",
            "body": "",
            "version": "",
            "descendants": "/rest/api/content/987654321/descendant",
            "space": "/rest/api/space/TEST",
            "childTypes": "",
            "operations": "",
            "schedulePublishDate": "",
            "children": "/rest/api/content/987654321/child",
            "ancestors": ""
        },
        "_links": {
            "self": "https://fakewiki.atlassian.net/wiki/rest/api/content/987654321",
            "tinyui": "/x/aaaaa",
            "editui": "/pages/resumedraft.action?draftId=987654321",
            "webui": "/spaces/TEST/overview"
        }
    }],
    "container": {
        "id": 987654321,
        "key": "TEST",
        "name": "Test Page",
        "type": "global",
        "status": "current",
        "history": {
            "createdBy": {
                "type": "known",
                "accountId": "5e0fexampleexampleexample",
                "accountType": "atlassian",
                "email": "fake@mail.email",
                "publicName": "Artis3n",
                "profilePicture": {
                    "path": "/wiki/aa-avatar/5e0fexampleexampleexample",
                    "width": 48,
                    "height": 48,
                    "isDefault": false
                },
                "displayName": "Artis3n",
                "isExternalCollaborator": false,
                "_expandable": {"operations": "", "personalSpace": ""},
                "_links": {"self": "https://fakewiki.atlassian.net/wiki/rest/api/user?accountId=5e0fexampleexampleexample"}
            }, "createdDate": "2021-01-13T03:25:09.101Z"
        },
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
            "homepage": "/rest/api/content/987654321"
        },
        "_links": {"webui": "/spaces/TEST", "self": "https://fakewiki.atlassian.net/wiki/rest/api/space/TEST"}
    },
    "macroRenderedOutput": {},
    "body": {
        "storage": {
            "value": "<p>&lt;h1&gt;Test&lt;/h1&gt;</p>",
            "representation": "storage",
            "embeddedContent": [],
            "_expandable": {"content": "/rest/api/content/987654321"}
        },
        "_expandable": {
            "editor": "",
            "atlas_doc_format": "",
            "view": "",
            "export_view": "",
            "styled_view": "",
            "dynamic": "",
            "editor2": "",
            "anonymous_export_view": ""
        }
    },
    "extensions": {"position": 98534576},
    "_expandable": {
        "childTypes": "",
        "metadata": "",
        "operations": "",
        "schedulePublishDate": "",
        "children": "/rest/api/content/987654321/child",
        "restrictions": "/rest/api/content/123456789/restriction/byOperation",
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

export const errorExistingVersion: ConfluenceApiError = {
    "statusCode": 409,
    "data": {"authorized": false, "valid": true, "errors": [], "successful": false},
    "message": "com.atlassian.confluence.api.service.exceptions.ConflictException: Version must be incremented on update. Current version is: 9"
}

export const errorPageIdNotFound: ConfluenceApiError = {
    "statusCode": 404,
    "data": {"authorized": false, "valid": true, "errors": [], "successful": false},
    "message": "com.atlassian.confluence.api.service.exceptions.NotFoundException: Could not find Content for update with id ContentId{id=123456789}"
}
