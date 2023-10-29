import { Validation } from '../../../../presentation/controllers/login/signup/signup-controller-protocols'
import { ValidationComposite, EmailFieldValidation, RequiredFieldValidation } from '../../../../validations/validators'
import { EmailValidatorAdapter } from '../../../../infra/validators/email-validator-adapter'

export const makeLoginValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['email', 'password']) {
    validations.push(new RequiredFieldValidation(field))
  }
  validations.push(new EmailFieldValidation('email', new EmailValidatorAdapter()))
  return new ValidationComposite(validations)
}
