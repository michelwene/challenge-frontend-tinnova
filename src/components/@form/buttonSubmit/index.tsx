import type { ComponentProps } from 'react'

import { Button } from '~ui'

export const ButtonSubmit = ({
  children,
  ...rest
}: ComponentProps<typeof Button>) => {
  return (
    <Button type='submit' {...rest}>
      {children}
    </Button>
  )
}
