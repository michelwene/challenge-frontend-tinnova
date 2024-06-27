import styled from 'styled-components'

import { LoadingIcon } from '~icons'

type SpinProps = {
  $color?: string
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const Spin = styled(LoadingIcon)<SpinProps>`
  animation: spin 1s linear infinite;
  color: ${({ $color, theme }) => $color ?? theme.colors.white};

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`
