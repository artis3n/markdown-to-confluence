import { ConfluenceApiGetContentResponse } from "../../src/types/definitions";

export const getContentSearchByTitle: ConfluenceApiGetContentResponse = {
  results: [
    {
      id: "212992026",
      type: "page",
      status: "current",
      title: "Markdown Test",
      macroRenderedOutput: {},
      extensions: { position: 123456789 },
      _expandable: {
        container: "/rest/api/space/TEST",
        metadata: "",
        restrictions: "/rest/api/content/987654321/restriction/byOperation",
        history: "/rest/api/content/123456789/history",
        body: "",
        version: "",
        descendants: "/rest/api/content/123456789/descendant",
        space: "/rest/api/space/TEST",
        childTypes: "",
        operations: "",
        schedulePublishDate: "",
        children: "/rest/api/content/987654321/child",
        ancestors: "",
      },
      _links: {
        self: "https://fakewiki.atlassian.net/wiki/rest/api/content/123456789",
        tinyui: "/x/aaaaa",
        editui: "/pages/resumedraft.action?draftId=123456789",
        webui: "/spaces/TEST/pages/987654321/Markdown+Test",
      },
    },
  ],
  start: 0,
  limit: 25,
  size: 1,
  _links: {
    base: "https://fakewiki.atlassian.net/wiki",
    context: "/wiki",
    self: "https://fakewiki.atlassian.net/wiki/rest/api/content?spaceKey=TEST&type=page&title=Markdown%20Test&status=current",
  },
};

export const noFoundResults: ConfluenceApiGetContentResponse = {
  results: [],
  start: 0,
  limit: 25,
  size: 0,
  _links: {
    base: "https://fakewiki.atlassian.net/wiki",
    context: "/wiki",
    self: "https://fakewiki.atlassian.net/wiki/rest/api/content?spaceKey=TEST&type=page&title=Fake%20Title&status=current",
  },
};
