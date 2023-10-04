import { InvalidParamError } from '../../errors'
import { Validation } from '../../protocols/validation'

export class CompareFieldsValidation implements Validation {
  private readonly field: string
  private readonly fieldToCompareName: string

  constructor (field: string, fieldToCompare: string) {
    this.field = field
    this.fieldToCompareName = fieldToCompare
  }

  validate (input: any): Error {
    if (input[this.field] !== input[this.fieldToCompareName]) {
      return new InvalidParamError(this.fieldToCompareName)
    }
  }
}
