import { forwardRef, type Ref, useState } from 'react'

import type { InputHTMLAttributes } from 'react'

import * as S from './styles'

type InputComponentProps = {
  error: boolean
  label: string
} & InputHTMLAttributes<HTMLInputElement>

const InputComponent = (
  { error, label, name, value, ...rest }: InputComponentProps,
  ref: Ref<HTMLInputElement>,
) => {
  const [focused, setFocused] = useState(false)
  return (
    <S.Container>
      <S.Label $focused={focused || !!value} htmlFor={name}>
        {label}
      </S.Label>
      <S.Input
        $error={error}
        id={name}
        name={name}
        onBlur={() => setFocused(false)}
        onFocus={() => setFocused(true)}
        ref={ref}
        type={'text'}
        value={value}
        {...rest}
      />
    </S.Container>
  )
}

export const FormInput = forwardRef<HTMLInputElement, InputComponentProps>(
  InputComponent,
)
