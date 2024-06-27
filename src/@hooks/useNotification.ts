import type { TypeOptions } from 'react-toastify'
import { toast } from 'react-toastify'

type ShowNotificationProps = {
  type: TypeOptions
  message: string
}

export const useNotification = () => {
  const showNotification = ({ message, type }: ShowNotificationProps) => {
    return toast(message, {
      autoClose: 3000,
      type: type,
    })
  }

  return {
    showNotification,
  }
}
