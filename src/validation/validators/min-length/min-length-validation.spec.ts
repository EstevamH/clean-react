import { MinLengthError } from '@/validation/errors'
import { MinLengthValidation } from './min-length-validation'

const makeSut = (minLength: number): MinLengthValidation => new MinLengthValidation('field', minLength)

describe('MinLengthValidation', () => {
  test('Should return error if value is invalid', () => {
    const minLength = 5
    const sut = makeSut(minLength)
    const error = sut.validate('123')
    expect(error).toEqual(new MinLengthError(minLength))
  })
})
