import styled from 'styled-components'

export const ResponsiveTitle = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: inline-block;
  }
`

export const TableItem = styled.td`
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;

  @media (max-width: 768px) {
    align-items: center;
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
  }
`

export const TableRow = styled.tr`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    padding: 0.75rem;

    td:last-child {
      border-bottom: none;
    }
  }
`

export const Text = styled.p`
  text-overflow: ellipsis;
  overflow: hidden;
`
