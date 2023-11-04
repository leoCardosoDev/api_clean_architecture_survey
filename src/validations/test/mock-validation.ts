import { Validation } from '@/presentation/protocols'

export const mockValidation = (): Validation => {
  class ValidationStubs implements Validation {
    validate (input: any): Error {
      return null
    }
  }
  return new ValidationStubs()
}
