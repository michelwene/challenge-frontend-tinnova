import styled, { css } from 'styled-components'

type Props = {
  $isOpen: boolean
}
export const Container = styled.div<Props>`
  background: ${({ theme }) => theme.colors.background};
  position: fixed;
  z-index: -1;
  inset: 0;
  width: 100vw;
  height: 100vh;
  visibility: hidden;
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
  transition: all 0.3s;

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      z-index: 9999999999999;
      opacity: 1;
      visibility: visible;
    `}
`
