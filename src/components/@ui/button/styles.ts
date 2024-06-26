import styled from 'styled-components'

type ButtonProps = {
  $loading?: boolean
}

export const Button = styled.button<ButtonProps>`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};

  border: none;
  border-radius: 32px;

  font-size: 1.5rem;

  padding: 1rem;

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

  ${({ $loading }) => $loading && `pointer-events: none;`}
`
