export class MinLengthError extends Error {
  constructor (readonly minLength: number) {
    super(`O campo deve possuir no mínimo ${minLength} caracteres`)
    this.name = 'MinLengthError'
  }
}
