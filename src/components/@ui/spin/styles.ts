import styled from 'styled-components'

import { LoadingIcon } from '~icons'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const Spin = styled(LoadingIcon)`
  animation: spin 1s linear infinite;
  color: ${({ theme }) => theme.colors.white};

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`
