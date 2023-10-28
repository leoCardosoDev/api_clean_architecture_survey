import { HttpResponse, HttpRequest, Controller, AddAccount, Validation, Authentication } from './signup-controller-protocols'
import { badRequest, serverError, ok } from '../../helpers/http/http-helper'

export class SignUpController implements Controller {
  constructor (private readonly addAccount: AddAccount, private readonly authentication: Authentication, private readonly validation: Validation) {
    this.validation = validation
    this.addAccount = addAccount
    this.authentication = authentication
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }
      const { name, email, password } = httpRequest.body
      await this.addAccount.add({
        name: name,
        email: email,
        password: password
      })
      const accessToken = await this.authentication.auth({
        email, password
      })
      return ok({ accessToken })
    } catch (error) {
      return serverError(error)
    }
  }
}
