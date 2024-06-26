import { InputHTMLAttributes, forwardRef, type Ref } from 'react'

type InputComponentProps = {} & InputHTMLAttributes<HTMLInputElement>

const InputComponent = (
  { ...rest }: InputComponentProps,
  ref: Ref<HTMLInputElement>,
) => {
  return <input ref={ref} type={'text'} {...rest} />
}

export const FormInput = forwardRef<HTMLInputElement, InputComponentProps>(
  InputComponent,
)
