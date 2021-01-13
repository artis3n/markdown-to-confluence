import { convert } from "@rayzr/markdown2confluence";
import { MarkupConversionOptions } from "./types/definitions";

export const convertToConfluenceWiki = (
  content: string,
  opts: MarkupConversionOptions
): string => {
  return convert(content, {
    codeStyling: {
      linenumbers: opts.codeLineNumbers,
      theme: opts.codeTheme,
    },
    marked: {
      gfm: true,
      breaks: true,
      baseUrl: opts.baseUrl,
      smartLists: true,
    },
  });
};
