import { isCPF, isPhone } from 'brazilian-values'
import { z } from 'zod'

export const formSchema = z.object({
  name: z
    .string({
      required_error: 'Nome é obrigatório',
    })
    .min(3, 'Campo deve conter 3 caracteres ou mais'),
  cpf: z
    .string({
      required_error: 'CPF é obrigatório',
    })
    .refine((value) => {
      return isCPF(value)
    }, 'CPF inválido'),
  phone: z
    .string({
      required_error: 'Telefone é obrigatório',
    })
    .refine((value) => {
      return isPhone(value)
    }, 'Telefone inválido'),
  email: z
    .string({
      required_error: 'E-mail é obrigatório',
    })
    .email('E-mail inválido'),
})
