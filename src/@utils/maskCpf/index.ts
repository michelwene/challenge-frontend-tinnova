import { mask } from 'remask'

export const maskCpf = (value: string) => {
  if (!value) return
  return mask(value, ['999.999.999-99'])
}
