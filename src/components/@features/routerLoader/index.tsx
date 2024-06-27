import { theme } from '~styles/theme'
import { Spin } from '~ui'

import * as S from './styles'

type Props = {
  isOpen: boolean
}

export const RouterLoader = ({ isOpen }: Props) => {
  return (
    <S.Container $isOpen={isOpen}>
      <Spin color={theme.colors.primary} size='xlarge' />
    </S.Container>
  )
}
