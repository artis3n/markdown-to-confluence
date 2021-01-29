import {
  ConfluenceApiGetContentByIdData,
  ConfluenceApiGetContentResponse,
  ConfluenceApiNewOrUpdatedContentData,
  ConfluenceAuth,
  ConfluencePage,
  ConfluenceSpaceKey,
} from "../types/definitions";
import { AxiosResponse } from "axios";

export class Confluence {
  url: string;
  auth: ConfluenceAuth;
  spaceKey: ConfluenceSpaceKey;

  constructor(
    confluenceUrl: string,
    auth: ConfluenceAuth,
    spaceKey: ConfluenceSpaceKey
  ) {
    this.url = confluenceUrl;
    this.auth = auth;
    this.spaceKey = spaceKey;
  }

  postPage(
    content: ConfluencePage
  ): Promise<AxiosResponse<ConfluenceApiNewOrUpdatedContentData>> {
    const data: ConfluenceApiNewOrUpdatedContentData = {
      id: "",
      type: "",
      status: "",
      title: content.title,
      space: {
        id: 1,
        key: "",
        name: "",
        type: "",
        status: "",
        _expandable: {},
        _links: {},
      },
      history: {
        createdDate: "",
        createdBy: {},
      },
      version: {
        when: "",
        number: 1,
        minorEdit: false,
        by: {},
        friendlyWhen: "",
        confRev: "",
        _expandable: {},
        _links: {},
      },
      container: {
        id: 1,
        key: "",
        name: "",
        type: "",
        status: "",
        _expandable: {},
        _links: {},
      },
      ancestors: [
        {
          id: "",
          type: "",
          status: "",
          title: "",
          macroRenderedOutput: {},
          extensions: {},
          _expandable: {},
          _links: {},
        },
      ],
      macroRenderedOutput: {},
      body: {
        storage: {
          value: content.body,
          representation: "storage",
          embeddedContent: [],
          _expandable: {},
        },
        _expandable: {},
      },
      extensions: {},
      _expandable: {},
      _links: {},
    };

    return new Promise((resolve) =>
      resolve({
        data: data,
        status: 200,
        statusText: "OK",
        headers: {},
        config: {},
      })
    );
  }

  updateExistingPage(
    metadata: ConfluenceApiGetContentByIdData,
    page: ConfluencePage
  ): Promise<AxiosResponse<ConfluenceApiNewOrUpdatedContentData>> {
    const data: ConfluenceApiNewOrUpdatedContentData = {
      id: metadata.id,
      type: metadata.type,
      status: metadata.status,
      title: page.title,
      space: {
        id: 1,
        key: "",
        name: "",
        type: "",
        status: "",
        _expandable: {},
        _links: {},
      },
      history: {
        createdDate: "",
        createdBy: {},
      },
      version: {
        when: "",
        number: 1,
        minorEdit: false,
        by: {},
        friendlyWhen: "",
        confRev: "",
        _expandable: {},
        _links: {},
      },
      container: {
        id: 1,
        key: "",
        name: "",
        type: "",
        status: "",
        _expandable: {},
        _links: {},
      },
      ancestors: [
        {
          id: "",
          type: "",
          status: "",
          title: "",
          macroRenderedOutput: {},
          extensions: {},
          _expandable: {},
          _links: {},
        },
      ],
      macroRenderedOutput: {},
      body: {
        storage: {
          value: page.body,
          representation: "storage",
          embeddedContent: [],
          _expandable: {},
        },
        _expandable: {},
      },
      extensions: {},
      _expandable: {},
      _links: {},
    };

    return new Promise((resolve) =>
      resolve({
        data: data,
        status: 200,
        statusText: "OK",
        headers: {},
        config: {},
      })
    );
  }

  findPageByTitle(
    title: string
  ): Promise<AxiosResponse<ConfluenceApiGetContentResponse>> {
    const data: ConfluenceApiGetContentResponse = {
      results: [
        {
          id: "",
          type: "",
          status: "",
          title: title,
          macroRenderedOutput: {},
          extensions: {},
          _expandable: {},
          _links: {},
        },
      ],
      start: 1,
      limit: 1,
      size: 1,
      _links: {},
    };

    return new Promise((resolve) =>
      resolve({
        data: data,
        status: 200,
        statusText: "OK",
        headers: {},
        config: {},
      })
    );
  }

  getPageMetadataById(
    id: string
  ): Promise<AxiosResponse<ConfluenceApiGetContentByIdData>> {
    const data: ConfluenceApiGetContentByIdData = {
      id: id,
      type: "",
      status: "",
      title: "",
      space: {
        id: 1,
        key: "",
        name: "",
        type: "",
        status: "",
        _expandable: {},
        _links: {},
      },
      history: {
        createdDate: "",
        createdBy: {
          type: "",
          displayName: "",
        },
        latest: false,
      },
      version: {
        when: "",
        number: 1,
        minorEdit: false,
        by: {
          type: "",
          displayName: "",
        },
        friendlyWhen: "",
        confRev: "",
        syncRev: "",
        syncRevSource: "",
        _expandable: {},
        _links: {},
      },
      macroRenderedOutput: {},
      extensions: {},
      _expandable: {},
      _links: {},
    };

    return new Promise((resolve) =>
      resolve({
        data: data,
        status: 200,
        statusText: "OK",
        headers: {},
        config: {},
      })
    );
  }
}
