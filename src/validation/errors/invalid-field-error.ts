export class InvalidFieldError extends Error {
  constructor () {
    super('Formato inválido')
    this.name = 'InvalidFieldError'
  }
}
