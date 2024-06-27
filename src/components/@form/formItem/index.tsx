import * as S from './styles'
type Props = {
  children: React.ReactNode
  error?: string
}

export const FormItem = ({ children, error }: Props) => {
  return (
    <S.Container>
      {children}
      {error && <S.HelperError>{error}</S.HelperError>}
    </S.Container>
  )
}
