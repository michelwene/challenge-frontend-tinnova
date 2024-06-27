import styled, { css } from 'styled-components'

type Props = {
  $isOpen: boolean
}
export const Container = styled.div<Props>`
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: center;

  inset: 0;
  width: 100vw;
  height: 100vh;

  opacity: 0;
  position: fixed;
  transition: all 0.3s;
  visibility: hidden;
  z-index: -1;

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      opacity: 1;
      visibility: visible;
      z-index: 9999999999999;
    `}
`
