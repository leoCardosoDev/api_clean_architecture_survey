import { Validation } from '../../../../../presentation/protocols/validation'
import { makeLoginValidation } from './login-validation-factory'
import { EmailValidator } from '../../../../../validations/protocols/email-validator'
import { EmailFieldValidation, RequiredFieldValidation, ValidationComposite } from '../../../../../validations/validators'

jest.mock('../../../../../validations/validators/validation-composite')

const makeEmailValidator = (): EmailValidator => {
  class EmailValidatorStub implements EmailValidator {
    isValid (email: string): boolean {
      return true
    }
  }
  return new EmailValidatorStub()
}

describe('LoginValidation Factory', () => {
  test('Should call ValidationComposite with all validations', () => {
    makeLoginValidation()
    const validations: Validation[] = []
    for (const field of ['email', 'password']) {
      validations.push(new RequiredFieldValidation(field))
    }
    validations.push(new EmailFieldValidation('email', makeEmailValidator()))
    expect(ValidationComposite).toHaveBeenLastCalledWith(validations)
  })
})
