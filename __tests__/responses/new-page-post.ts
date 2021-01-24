import {ConfluenceApiNewOrUpdatedContentData} from "../../src/types/definitions";

export const newPagePost: ConfluenceApiNewOrUpdatedContentData = {
  "id": "987654321",
  "type": "page",
  "status": "current",
  "title": "Test page",
  "space": {
    "id": 123456789,
    "key": "TEST",
    "name": "Test Page",
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
      "homepage": "/rest/api/content/123456789"
    },
    "_links": {
      "webui": "/spaces/TEST",
      "self": "https://fakewiki.atlassian.net/wiki/rest/api/space/TEST"
    }
  },
  "history": {
    "latest": true,
    "createdBy": {
      "type": "known",
      "accountId": "5e0aEXAMPLEEXAMPLEEXAMPLE",
      "accountType": "atlassian",
      "email": "markdown@email.mail",
      "publicName": "Artis3n",
      "profilePicture": {
        "path": "/wiki/aa-avatar/5e0aEXAMPLEEXAMPLEEXAMPLE",
        "width": 48,
        "height": 48,
        "isDefault": false
      },
      "displayName": "Artis3n",
      "isExternalCollaborator": false,
      "_expandable": {
        "operations": "",
        "personalSpace": ""
      },
      "_links": {
        "self": "https://fakewiki.atlassian.net/wiki/rest/api/user?accountId=5e0aEXAMPLEEXAMPLEEXAMPLE"
      }
    },
    "createdDate": "2021-01-19T03:39:14.625Z",
    "_expandable": {
      "lastUpdated": "",
      "previousVersion": "",
      "contributors": "",
      "nextVersion": ""
    },
    "_links": {
      "self": "https://fakewiki.atlassian.net/wiki/rest/api/content/987654321/history"
    }
  },
  "version": {
    "by": {
      "type": "known",
      "accountId": "5e0aEXAMPLEEXAMPLEEXAMPLE",
      "accountType": "atlassian",
      "email": "markdown@email.mail",
      "publicName": "Artis3n",
      "profilePicture": {
        "path": "/wiki/aa-avatar/5e0aEXAMPLEEXAMPLEEXAMPLE",
        "width": 48,
        "height": 48,
        "isDefault": false
      },
      "displayName": "Artis3n",
      "isExternalCollaborator": false,
      "_expandable": {
        "operations": "",
        "personalSpace": ""
      },
      "_links": {
        "self": "https://fakewiki.atlassian.net/wiki/rest/api/user?accountId=5e0aEXAMPLEEXAMPLEEXAMPLE"
      }
    },
    "when": "2021-01-19T03:39:14.625Z",
    "friendlyWhen": "just a moment ago",
    "message": "",
    "number": 1,
    "minorEdit": false,
    "confRev": "confluence$content$123456759.2",
    "_expandable": {
      "collaborators": "",
      "content": "/rest/api/content/123456789"
    },
    "_links": {
      "self": "https://fakewiki.atlassian.net/wiki/rest/api/content/123456789/version/1"
    }
  },
  "ancestors": [
    {
      "id": "654987123",
      "type": "page",
      "status": "current",
      "title": "Test Home Page",
      "macroRenderedOutput": {},
      "extensions": {
        "position": 400
      },
      "_expandable": {
        "container": "/rest/api/space/TEST",
        "metadata": "",
        "restrictions": "/rest/api/content/123987456/restriction/byOperation",
        "history": "/rest/api/content/123987456/history",
        "body": "",
        "version": "",
        "descendants": "/rest/api/content/123987456/descendant",
        "space": "/rest/api/space/TEST",
        "childTypes": "",
        "operations": "",
        "schedulePublishDate": "",
        "children": "/rest/api/content/123987456/child",
        "ancestors": ""
      },
      "_links": {
        "self": "https://fakewiki.atlassian.net/wiki/rest/api/content/123456789",
        "tinyui": "/x/example",
        "editui": "/pages/resumedraft.action?draftId=123456789",
        "webui": "/spaces/TEST/overview"
      }
    }
  ],
  "container": {
    "id": 987654321,
    "key": "TEST",
    "name": "Test Page",
    "type": "global",
    "status": "current",
    "history": {
      "createdBy": {
        "type": "known",
        "accountId": "5e0aEXAMPLEEXAMPLEEXAMPLE",
        "accountType": "atlassian",
        "email": "markdown@email.mail",
        "publicName": "Artis3n",
        "profilePicture": {
          "path": "/wiki/aa-avatar/5e0aEXAMPLEEXAMPLEEXAMPLE",
          "width": 48,
          "height": 48,
          "isDefault": false
        },
        "displayName": "Artis3n",
        "isExternalCollaborator": false,
        "_expandable": {
          "operations": "",
          "personalSpace": ""
        },
        "_links": {
          "self": "https://fakewiki.atlassian.net/wiki/rest/api/user?accountId=5e0aEXAMPLEEXAMPLEEXAMPLE"
        }
      },
      "createdDate": "2021-01-13T03:25:09.101Z"
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
      "homepage": "/rest/api/content/123987456"
    },
    "_links": {
      "webui": "/spaces/TEST",
      "self": "https://fakewiki.atlassian.net/wiki/rest/api/space/TEST"
    }
  },
  "macroRenderedOutput": {},
  "body": {
    "storage": {
      "value": "<h1>Title</h1>",
      "representation": "storage",
      "embeddedContent": [],
      "_expandable": {
        "content": "/rest/api/content/123456789"
      }
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
  "extensions": {
    "position": 898
  },
  "_expandable": {
    "childTypes": "",
    "metadata": "",
    "operations": "",
    "schedulePublishDate": "",
    "children": "/rest/api/content/123456789/child",
    "restrictions": "/rest/api/content/123456789/restriction/byOperation",
    "descendants": "/rest/api/content/123456789/descendant"
  },
  "_links": {
    "editui": "/pages/resumedraft.action?draftId=123456789",
    "webui": "/spaces/TEST/pages/123456789/Test+page",
    "context": "/wiki",
    "self": "https://fakewiki.atlassian.net/wiki/rest/api/content/897564312",
    "tinyui": "/x/example",
    "collection": "/rest/api/content",
    "base": "https://fakewiki.atlassian.net/wiki"
  }
}
