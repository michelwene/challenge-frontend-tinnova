import styled from 'styled-components'

import { TeamIcon } from '~icons'

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  justify-content: center;

  padding: 1rem;
`

export const Icon = styled(TeamIcon)`
  color: ${({ theme }) => theme.colors.textDisabled};
`

export const Message = styled.p`
  color: ${({ theme }) => theme.colors.textDisabled};
`
