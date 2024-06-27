import { forwardRef } from 'react'

import type {
  ButtonHTMLAttributes,
  ComponentProps,
  DetailedHTMLProps,
  Ref,
} from 'react'

import { Spin } from '../spin'

import * as S from './styles'

type ButtonProps = {
  loading?: boolean
  shape?: ComponentProps<typeof S.Button>['$shape']
  size?: ComponentProps<typeof S.Button>['$size']
  buttonType?: ComponentProps<typeof S.Button>['$type']
  danger?: ComponentProps<typeof S.Button>['$danger']
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export const ButtonComponent = (
  {
    buttonType = 'primary',
    children,
    danger,
    disabled,
    loading = false,
    shape = 'round',
    size = 'large',
    ...rest
  }: ButtonProps,
  ref: Ref<HTMLButtonElement>,
) => {
  return (
    <S.Button
      $danger={danger}
      disabled={disabled}
      $loading={loading}
      $shape={shape}
      $size={size}
      $type={buttonType}
      ref={ref}
      {...rest}
    >
      {loading ? <Spin size={size} /> : children}
    </S.Button>
  )
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ButtonComponent,
)
