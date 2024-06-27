import styled, { css } from 'styled-components'

type InputProps = {
  $error?: boolean
}

type LabelProps = {
  $focused: boolean
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`

export const Input = styled.input<InputProps>`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.inputBorder};
  color: ${({ theme }) => theme.colors.primaryFocus};
  font-size: 1.5rem;
  font-weight: 600;

  outline: none;
  padding: 0.25rem;
  width: 100%;

  &:disabled {
    color: ${({ theme }) => theme.colors.textDisabled};
    pointer-events: none;
  }

  &:hover {
    cursor: text;
  }

  ${({ $error }) =>
    $error &&
    css`
      border-bottom-color: ${({ theme }) => theme.colors.error};
    `}
`

export const Label = styled.label<LabelProps>`
  color: ${({ theme }) => theme.colors.placeholder};
  font-size: 1.25rem;
  font-weight: 400;

  position: absolute;
  top: 0px;

  transition: 0.3s ease all;

  &:hover {
    cursor: text;
  }

  ${({ $focused }) =>
    $focused &&
    css`
      top: -10px;
      font-size: 0.75rem;
      &:hover {
        cursor: default;
      }
    `}
`
