// Mock 3rd party libraries
jest.mock("axios");
jest.mock("axios-curlirize");
jest.mock("@actions/core");
jest.mock("@actions/github");
// Mock local files
jest.mock("../src/markdownProcessor");
jest.mock("../src/Confluence");

const actionsCore = require("@actions/core");
import { main as mainFunc } from "../src/main";

const requiredEnvVars = ["confluence_url", "space_key", "username", "password"];

describe("main", () => {
  let inputSpy: jest.SpyInstance;
  let errorSpy: jest.SpyInstance;

  beforeEach(() => {
    inputSpy = jest
      .spyOn(actionsCore, "getInput")
      .mockImplementation((name: unknown) => {
        return name;
      });

    errorSpy = jest.spyOn(actionsCore, "setFailed");
  });

  afterEach(() => {
    inputSpy.mockRestore();
    errorSpy.mockRestore();
  });

  it("Checks for all required env vars", async () => {
    expect.assertions(2);
    await expect(mainFunc()).resolves.not.toThrow();
    expect(errorSpy.mock.calls.length).toEqual(0);
  });

  it("Throws an error if confluence_url is not provided", async () => {
    expect.assertions(1);
    inputSpy.mockImplementation((name: unknown) => {
      if (name === "confluence_url") {
        return "";
      }
      return name;
    });

    await expect(mainFunc()).rejects.toEqual(
      new Error(
        "'confluence_url' input parameter is not defined. You must specify your Confluence host."
      )
    );
  });

  requiredEnvVars.forEach((requiredEnvVar) => {
    it(`Throws an error if ${requiredEnvVar} env var is not provided`, async () => {
      expect.assertions(1);
      inputSpy.mockImplementation((name: unknown) => {
        if (name === requiredEnvVar) {
          return "";
        }
        return name;
      });

      await expect(mainFunc()).rejects.toEqual(
        expect.objectContaining(
          new Error(`'${requiredEnvVar}' input parameter is not defined`)
        )
      );
    });
  });

  it("prunes the trailing slash from confluence_url if needed", async () => {
    // FIXME: I don't see a way to actually test this.
    // The Jest documentation is not fitting how I set this up, so I can't get the mocked instance of the Confluence class
    // https://jestjs.io/docs/en/es6-class-mocks#in-depth-understanding-mock-constructor-functions
    expect.assertions(1);
    inputSpy.mockImplementation((name: unknown) => {
      if (name == "confluence_url") {
        return "thisUrl/path/";
      }
      return name;
    });
    await expect(mainFunc()).resolves.not.toThrow();
  });
});
