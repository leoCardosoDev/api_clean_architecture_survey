import { Validation } from '@/presentation/controllers/login/signup/signup-controller-protocols'
import { CompareFieldsValidation, EmailValidation, ValidationComposite, RequiredFieldValidation } from '@/validations/validators'
import { EmailValidatorAdapter } from '@/infra/validators/email-validator-adapter'

export const makeSignUpValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['name', 'email', 'password', 'passwordConfirmation']) {
    validations.push(new RequiredFieldValidation(field))
  }
  validations.push(new CompareFieldsValidation('password', 'passwordConfirmation'))
  validations.push(new EmailValidation('email', new EmailValidatorAdapter()))
  return new ValidationComposite(validations)
}
