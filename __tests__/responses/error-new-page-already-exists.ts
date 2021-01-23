import {ConfluenceApiError} from "../../src/types/definitions";

export const newPageAlreadyExistsError: ConfluenceApiError = {
  "statusCode": 400,
  "data": {
    "authorized": false,
    "valid": true,
    "errors": [],
    "successful": false
  },
  "message": "com.atlassian.confluence.api.service.exceptions.BadRequestException: A page with this title already exists: A page already exists with the title Test page in the space with key TEST"
}
