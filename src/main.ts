import { AxiosResponse } from "axios";
import curlirize from "axios-curlirize";
import { debug, error, getInput, info, setFailed } from "@actions/core";
import { context as githubContext } from "@actions/github";
import { convertToConfluenceWiki } from "./markdownProcessor";
import { Confluence } from "./Confluence";
import {
  ConfluenceApiGetContentByIdData,
  ConfluenceApiGetContentResponse,
  ConfluenceAuth,
  ConfluencePage,
} from "./types/definitions";
import { StatusCodes } from "http-status-codes";

const main = async () => {
  let confluenceUrl = getInput("confluence_url");
  if (confluenceUrl === "") {
    throw new Error(
      "'confluence_url' input parameter is not defined. You must specify your Confluence host."
    );
  }
  // Remove trailing slash if present
  if (confluenceUrl.endsWith("/")) {
    confluenceUrl = confluenceUrl.slice(0, -1);
  }

  const spaceKey = getInput("space_key");
  if (spaceKey === "") {
    throw new Error(
      "'space_key' input parameter is not defined. You must specify your Confluence Space Key."
    );
  }

  const auth: ConfluenceAuth = {
    username: getInput("username"),
    password: getInput("password"),
  };
  if (auth.username === "" || auth.password === "") {
    throw new Error(
      "'username' or 'password' input parameters are not defined. You must specify a Confluence user and a corresponding API token or password."
    );
  }

  let baseUrl = getInput("base_url");
  if (baseUrl === "") {
    baseUrl = `https://github.com/${githubContext.repo.owner}/${githubContext.repo.repo}/blob/${githubContext.ref}/`;
  }

  const content = `# Title

I am a section, hello!

This is a [link to the Dockerfile](/Dockerfile)

\`\`\`javascript
const convertedMarkdown = convert(content, {
    marked: {
        gfm: true,
        tables: true
    }
})
\`\`\`

| :exclamation: This is a test |
| ----- |

| Header | Value |
| --- | --- |
| Test | Thing |
`;

  const markup = convertToConfluenceWiki(content, {
    baseUrl: baseUrl,
    codeLineNumbers: getInput("code_line_numbers").toLowerCase() === "true",
    codeTheme: getInput("code_theme"),
  });

  const confluence = new Confluence(confluenceUrl, auth, spaceKey);
  const page: ConfluencePage = {
    title: "Markdown Test",
    body: markup,
  };

  try {
    await confluence.postPage(page);
    info("Wrote page successfully");
  } catch (err) {
    debug(`${err.response?.data.reason} : ${err.response?.data.message}`);
    if (
      err.response?.data.message.includes(
        "A page with this title already exists"
      )
    ) {
      try {
        const foundPageResponse: AxiosResponse<ConfluenceApiGetContentResponse> = await confluence.findPageByTitle(
          page.title
        );
        const foundPage = foundPageResponse.data.results[0];
        const pageMetadataResponse: AxiosResponse<ConfluenceApiGetContentByIdData> = await confluence.getPageMetadataById(
          foundPage.id
        );
        const response = await confluence.updateExistingPage(
          pageMetadataResponse.data,
          page
        );
        if (response.status === StatusCodes.OK) {
          info("Successfully converted repo into Confluence wiki");
        }
      } catch (err) {
        error(
          `${err.response?.status}: ${err.response?.statusText}, ${err.response?.data} : ${err.request.path}`
        );
        setFailed(
          `Error occurred attempting to update Confluence on page: ${page.title}`
        );
      }
    } else {
      error(`${err.response.status} : ${err.response?.data.message}`);
      if (
        err.response?.data?.message.includes(
          "Could not create content with type page"
        )
      ) {
        error(
          `Check your permissions to create content on Space key ${spaceKey}. Does this space exist on ${confluenceUrl} ?`
        );
      }
      setFailed(
        `Error occurred attempting to update Confluence on page: ${page.title}`
      );
    }
  }
}

const axios = require("axios").default;
curlirize(axios, (result, err) => {
  const { command } = result;
  if (err) {
    error(err);
  } else {
    debug(command);
  }
});

main()
  .then(() => {})
  .catch((error) => setFailed(error));
