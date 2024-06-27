import type { ComponentProps } from 'react'

import { Button } from '../button'

export const IconButton = ({
  children,
  danger,
  onClick,
}: ComponentProps<typeof Button>) => {
  return (
    <Button danger={danger} shape='circle' size='small' onClick={onClick}>
      {children}
    </Button>
  )
}
