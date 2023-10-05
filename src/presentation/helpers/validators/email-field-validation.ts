import { InvalidParamError } from '../../errors/invalid-params-error'
import { EmailValidator } from '../../protocols/email-validator'
import { Validation } from '../../protocols/validation'

export class EmailFieldValidation implements Validation {
  constructor (private readonly field: string, private readonly emailValidator: EmailValidator) {
    this.field = field
    this.emailValidator = emailValidator
  }

  validate (input: any): Error {
    const isValid = this.emailValidator.isValid(input[this.field])
    if (!isValid) {
      return new InvalidParamError(this.field)
    }
  }
}
