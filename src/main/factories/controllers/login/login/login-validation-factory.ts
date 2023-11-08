import { Validation } from '@/presentation/controllers/login/signup/signup-controller-protocols'
import { EmailValidatorAdapter } from '@/infra/validators/email-validator-adapter'
import { ValidationComposite, EmailValidation, RequiredFieldValidation } from '@/validations/validators'

export const makeLoginValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['email', 'password']) {
    validations.push(new RequiredFieldValidation(field))
  }
  validations.push(new EmailValidation('email', new EmailValidatorAdapter()))
  return new ValidationComposite(validations)
}
