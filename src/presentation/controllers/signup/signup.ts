import { HttpResponse, HttpRequest, Controller, EmailValidator, AddAccount, Validation } from './signup-protocols'
import { badRequest, serverError, ok } from '../../helpers/http-helper'
import { InvalidParamError } from '../../errors'

export class SignUpController implements Controller {
  private readonly emailValidator: EmailValidator
  private readonly validation: Validation
  private readonly addAccount: AddAccount

  constructor (emailValidator: EmailValidator, addAccount: AddAccount, validation: Validation) {
    this.emailValidator = emailValidator
    this.validation = validation
    this.addAccount = addAccount
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }
      const { name, email, password } = httpRequest.body
      const isValid = this.emailValidator.isValid(email)
      if (!isValid) {
        return badRequest(new InvalidParamError('email'))
      }
      const account = await this.addAccount.add({
        name: name,
        email: email,
        password: password
      })
      return ok(account)
    } catch (error) {
      return serverError(error)
    }
  }
}
