import { ValidationComposite } from '@/validation/validators'
import { ValidationBuilder } from '@/validation/validators/buider/validation-builder'

export const makeLoginValidation = (): ValidationComposite => {
  return ValidationComposite.build([
    ...ValidationBuilder.field('email').required().email().build(),
    ...ValidationBuilder.field('password').required().min(5).build()
  ])
}
