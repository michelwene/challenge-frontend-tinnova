import styled from 'styled-components'

export const Card = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.75rem;
  padding: 0.75rem;
  max-width: 47.75rem;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  box-shadow:
    0 1px 2px 0 rgba(0, 0, 0, 0.03),
    0 1px 6px -1px rgba(0, 0, 0, 0.02),
    0 2px 4px 0 rgba(0, 0, 0, 0.02);
`

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.bgCard};
  padding: 1.5rem;
`

export const Content = styled.div`
  width: 100%;
  flex: 1;
`

export const HeaderContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 0.5rem;
  width: 100%;
`

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  width: 100%;
`
