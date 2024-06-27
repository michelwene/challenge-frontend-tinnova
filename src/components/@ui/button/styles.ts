import styled from 'styled-components'
import { css } from 'styled-components'

type ButtonProps = {
  $loading?: boolean
  $shape?: 'round' | 'default' | 'circle'
  $size?: 'small' | 'middle' | 'large'
  $type?: 'primary' | 'text'
  $danger?: boolean
}

export const Button = styled.button<ButtonProps>`
  align-items: center;
  border: none;
  display: flex;
  justify-content: center;
  gap: 0.5rem;

  min-height: 32px;
  min-width: 32px;

  transition: all 0.2s;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.9;
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.textDisabled};
    background-color: ${({ theme }) => theme.colors.bgDisabled};
    cursor: not-allowed;

    opacity: 1;
  }

  ${({ $danger }) =>
    $danger &&
    css`
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.error};
    `}

  ${({ $shape }) => {
    if ($shape === 'round') {
      return css`
        border-radius: 32px;
      `
    }

    if ($shape === 'default') {
      return css`
        border-radius: 8px;
      `
    }

    if ($shape === 'circle') {
      return css`
        border-radius: 50%;
      `
    }
  }}

  ${({ $size }) => {
    if ($size === 'small') {
      return css`
        font-size: 0.374rem;
        padding: 0.25rem;
      `
    }

    if ($size === 'middle') {
      return css`
        font-size: 1rem;
        padding: 0.5rem;
      `
    }

    if ($size === 'large') {
      return css`
        font-size: 1.5rem;
        padding: 1rem;
      `
    }
  }}

  ${({ $type, $danger }) => {
    if ($type === 'primary' && !$danger) {
      return css`
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.primary};
      `
    }

    if ($type === 'text') {
      return css`
        color: ${({ theme }) => theme.colors.text};
        background-color: ${({ theme }) => theme.colors.secondary};
        border: 1px solid ${({ theme }) => theme.colors.primary};
      `
    }
  }}

  ${({ $loading }) => $loading && `pointer-events: none;`}
`
