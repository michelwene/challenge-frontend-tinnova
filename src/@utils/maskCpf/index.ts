import { mask } from 'remask'

export const maskCpf = (value: string) => {
  return mask(value, ['999.999.999-99'])
}
