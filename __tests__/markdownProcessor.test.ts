import {MarkupConversionOptions} from "../src/types/definitions";

jest.mock("@rayzr/markdown2confluence")
const markdown2Confluence = require("@rayzr/markdown2confluence")

const processor = require('../src/markdownProcessor')

describe("markdownProcessor", () => {
    describe("convertToConfluenceWiki", () => {

        const defaultOpts: MarkupConversionOptions = {
            baseUrl: 'http://basic',
            codeTheme: 'Confluence',
            codeLineNumbers: true,
        }

        let markdownSpy: jest.SpyInstance
        beforeEach(() => {
            markdownSpy = jest.spyOn(markdown2Confluence, "convert")
        })

        afterEach(() => {
            markdownSpy.mockRestore()
        })

        // All of the code in this function is 3rd party, so we mock it and just check that it is invoked for coverage
        it("Converts strings", () => {
            const markdownCode = `# Hello There
            
            ## General Kenobi
`
            processor.convertToConfluenceWiki(markdownCode, defaultOpts)
            expect(markdownSpy).toBeCalledTimes(1)
        })
    })
})
