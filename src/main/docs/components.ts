import { badRequest, forbidden, notFound, serverError, unauthorized } from './components/'
import { apiKeyAuthSchema } from './schemas/api-key-auth-schema'

export default {
  securitySchemes: {
    apiKeyAuth: apiKeyAuthSchema
  },
  badRequest: badRequest,
  serverError: serverError,
  unauthorized: unauthorized,
  notFound: notFound,
  forbidden: forbidden
}
