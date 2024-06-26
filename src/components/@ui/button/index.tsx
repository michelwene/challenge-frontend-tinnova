import { forwardRef } from 'react'

import type { ButtonHTMLAttributes, DetailedHTMLProps, Ref } from 'react'

import { Spin } from '../spin'

import * as S from './styles'

type ButtonProps = {
  loading?: boolean
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export const ButtonComponent = (
  { children, disabled, loading = false, ...rest }: ButtonProps,
  ref: Ref<HTMLButtonElement>,
) => {
  return (
    <S.Button $loading={loading} disabled={disabled} ref={ref} {...rest}>
      {loading ? <Spin /> : children}
    </S.Button>
  )
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ButtonComponent,
)
