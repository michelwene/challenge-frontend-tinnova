import type { ComponentProps } from 'react'

import { Button } from '~ui'

export const ButtonSubmit = ({
  children,
  ...rest
}: Omit<ComponentProps<typeof Button>, 'type'>) => {
  return (
    <Button type='submit' {...rest}>
      {children}
    </Button>
  )
}
