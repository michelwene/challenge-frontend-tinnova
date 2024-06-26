import { mask } from 'remask'

export const maskDocument = (value: string) => {
  if (!value) return
  return mask(value, ['999.999.999-99'])
}
