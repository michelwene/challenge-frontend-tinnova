import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`

export const HelperError = styled.p`
  color: ${({ theme }) => theme.colors.error};
  font-size: 0.75rem;

  position: absolute;
  bottom: -14px;
`
