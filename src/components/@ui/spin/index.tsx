import * as S from './styles'

type Props = {
  size?: 'small' | 'middle' | 'large'
}

const sizes = {
  small: 16,
  middle: 24,
  large: 32,
}

export const Spin = ({ size = 'large' }: Props) => {
  return (
    <S.Container>
      <S.Spin size={sizes[size]} />
    </S.Container>
  )
}
