import * as S from './styles'

type Props = {
  message: string
}
export const Empty = ({ message }: Props) => {
  return (
    <S.Container>
      <S.Icon size={38} />
      <S.Message>{message}</S.Message>
    </S.Container>
  )
}
