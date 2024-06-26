import { mask } from 'remask'

export function maskPhoneNumber(value: string) {
  if (!value) return
  return mask(value, '(99) 99999-9999')
}
