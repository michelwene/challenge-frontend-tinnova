import * as S from './styles'

const sizes = {
  small: 16,
  middle: 24,
  large: 32,
  xlarge: 48,
}

type Props = {
  color?: string
  size?: keyof typeof sizes
}

export const Spin = ({ color, size = 'large' }: Props) => {
  return (
    <S.Container>
      <S.Spin $color={color} size={sizes[size]} />
    </S.Container>
  )
}
