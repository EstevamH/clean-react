import { MinLengthError } from '@/validation/errors'
import { MinLengthValidation } from './min-length-validation'
import faker from 'faker'

const makeSut = (minLength: number): MinLengthValidation => new MinLengthValidation(faker.database.column(), minLength)

describe('MinLengthValidation', () => {
  test('Should return error if value is invalid', () => {
    const minLength = 5
    const sut = makeSut(minLength)
    const error = sut.validate(faker.random.alphaNumeric(4))
    expect(error).toEqual(new MinLengthError(minLength))
  })

  test('Should return falsy if value is valid', () => {
    const minLength = 5
    const sut = makeSut(minLength)
    const error = sut.validate(faker.random.alphaNumeric(5))
    expect(error).toBeFalsy()
  })
})
