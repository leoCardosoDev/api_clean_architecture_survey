import { InvalidParamError } from '@/presentation/errors/invalid-params-error'
import { Validation } from '@/presentation/protocols/validation'
import { EmailValidator } from '@/validations/protocols/email-validator'

export class EmailValidation implements Validation {
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