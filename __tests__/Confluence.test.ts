// Mock 3rd party libraries
// jest.mock("axios"); // Don't mock axios, mock URLs with nock instead

import nock from "nock";

import { Confluence } from "../src/Confluence";
// `tsc` compiles with no problem if  "__tests__/responses/*.ts" is included in the tsconfig 'excludes.'
// Since this is a test file, we don't need it in the source directory.
// @ts-ignore
import { newPagePost } from "./responses/new-page-post";
// @ts-ignore
import { newPageAlreadyExistsError } from "./responses/error-new-page-already-exists";
import { ConfluenceApiError } from "../src/types/definitions";

describe("Confluence", () => {
  describe("constructor", () => {
    it("initializes a Confluence", () => {
      const url = "url";
      const spaceKey = "spacekey";
      const confluence = new Confluence(
        url,
        { username: "name", password: "pass" },
        spaceKey
      );
      expect(confluence.toString()).toEqual(`${url}/${spaceKey}`);
    });

    it("returns the user", () => {
      const user = "mjolnir";
      const confluence = new Confluence(
        "url",
        { username: user, password: "pass" },
        "space"
      );
      expect(confluence.user).toEqual(user);
    });
  });

  describe("postPage", () => {
    it("posts a new page creation", async () => {
      expect.assertions(6);

      const url = "https://myurl.com/wiki";
      nock(url).post("/rest/api/content").reply(200, newPagePost);

      const confluence = new Confluence(
        url,
        { username: USERNAME, password: PASSWORD },
        SPACEKEY
      );
      const result = await confluence.postPage({
        body: "<h1>Title</h1>",
        title: "Test page",
      });

      expect(result).not.toBeUndefined();
      expect(result.status).toEqual(200);
      expect(result.data.status).toEqual("current");
      expect(result.data.space.key).toEqual(SPACEKEY);
      expect(result.data.body.storage.value).toEqual("<h1>Title</h1>");
      expect(result.data.title).toEqual("Test page");
    });

    it("throws an error if a page has already been created", async () => {
      expect.assertions(1);

      const url = "https://myurl.com/wiki";
      nock(url).post("/rest/api/content").reply(400, newPageAlreadyExistsError);

      const confluence = new Confluence(
        url,
        { username: USERNAME, password: PASSWORD },
        SPACEKEY
      );

      await expect(
        confluence.postPage({ body: "<h1>Title</h1>", title: "Test page" })
      ).rejects.toThrowError("Request failed with status code 400");
    });

    it("returns an error message if a page already exists", async () => {
      expect.assertions(5);

      const title = "Test page";
      const url = "https://myurl.com/wiki";
      nock(url).post("/rest/api/content").reply(400, newPageAlreadyExistsError);

      const confluence = new Confluence(
        url,
        { username: USERNAME, password: PASSWORD },
        SPACEKEY
      );

      return confluence
        .postPage({ body: "<h1>Title</h1>", title })
        .then((res) => expect(res).toBeUndefined())
        .catch((err) => {
          expect(err).toHaveProperty("response");
          expect(err.response).toHaveProperty("data");
          const error: ConfluenceApiError = err.response.data;
          expect(error.statusCode).toEqual(400);
          expect(error.message).toEqual(
            expect.stringContaining(
              `A page with this title already exists: A page already exists with the title ${title} in the space with key ${SPACEKEY}`
            )
          );
          expect(error.data.successful).toBeFalsy();
        });
    });
  });
});

const USERNAME = "myuser";
const PASSWORD = "mypass";
const SPACEKEY = "TEST";
