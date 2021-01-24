import {
  ConfluenceApiGetContentByIdData,
  ConfluenceApiGetContentResponse,
  ConfluenceApiNewOrUpdatedContentData,
  ConfluenceAuth,
  ConfluencePage,
  ConfluenceSpaceKey,
} from "./types/definitions";
import axios, { AxiosResponse } from "axios";

export class Confluence {
  private readonly url: string;
  private readonly auth: ConfluenceAuth;
  private readonly spaceKey: ConfluenceSpaceKey;

  constructor(
    confluenceUrl: string,
    auth: ConfluenceAuth,
    spaceKey: ConfluenceSpaceKey
  ) {
    this.url = confluenceUrl;
    this.auth = auth;
    this.spaceKey = spaceKey;
  }

  get user(): string {
    return this.auth.username;
  }

  toString(): string {
    return `${this.url}/${this.spaceKey}`;
  }

  postPage(
    content: ConfluencePage
  ): Promise<AxiosResponse<ConfluenceApiNewOrUpdatedContentData>> {
    return axios({
      method: "post",
      url: `${this.url}/rest/api/content`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      auth: this.auth,
      data: {
        space: {
          key: this.spaceKey,
        },
        title: content.title,
        type: "page",
        status: "current",
        body: {
          wiki: {
            value: content.body,
            representation: "wiki",
          },
        },
      },
    });
  }

  updateExistingPage(
    metadata: ConfluenceApiGetContentByIdData,
    page: ConfluencePage
  ): Promise<AxiosResponse<ConfluenceApiNewOrUpdatedContentData>> {
    return axios({
      method: "put",
      url: `${this.url}/rest/api/content/${metadata.id}`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      auth: this.auth,
      data: {
        version: {
          number: metadata.version.number + 1,
        },
        title: page.title,
        type: "page",
        status: "current",
        body: {
          wiki: {
            value: page.body,
            representation: "wiki",
          },
        },
      },
    });
  }

  findPageByTitle(
    title: string
  ): Promise<AxiosResponse<ConfluenceApiGetContentResponse>> {
    return axios({
      method: "get",
      url: `${this.url}/rest/api/content`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      auth: this.auth,
      params: {
        spaceKey: this.spaceKey,
        title: title,
        type: "page",
        status: "current",
      },
    });
  }

  getPageMetadataById(
    id: string
  ): Promise<AxiosResponse<ConfluenceApiGetContentByIdData>> {
    return axios({
      method: "get",
      url: `${this.url}/rest/api/content/${id}`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      auth: this.auth,
      params: {
        status: "current",
      },
    });
  }
}
