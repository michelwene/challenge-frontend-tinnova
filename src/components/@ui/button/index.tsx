import { ButtonHTMLAttributes, DetailedHTMLProps, Ref, forwardRef } from 'react'

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export const ButtonComponent = (
  { children, ...rest }: ButtonProps,
  ref: Ref<HTMLButtonElement>,
) => {
  return (
    <button ref={ref} {...rest}>
      {children}
    </button>
  )
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ButtonComponent,
)
