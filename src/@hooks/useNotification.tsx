import type { TypeOptions } from 'react-toastify'
import { toast } from 'react-toastify'

import { CheckCircleIcon, CloseCircleIcon } from '~icons'
import { colors } from '~styles/theme/colors'
type ShowNotificationProps = {
  type: TypeOptions
  message: string
}

export const useNotification = () => {
  const showNotification = ({ message, type }: ShowNotificationProps) => {
    return toast(message, {
      autoClose: 3000,
      type: type,
      icon:
        type === 'success' ? (
          <CheckCircleIcon color={colors.success} size={20} />
        ) : (
          <CloseCircleIcon color={colors.error} size={20} />
        ),
    })
  }

  return {
    showNotification,
  }
}
