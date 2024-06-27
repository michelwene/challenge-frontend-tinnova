import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  padding-top: 1rem;

  @media (max-width: 768px) {
    padding: 0.75rem;
  }
`
