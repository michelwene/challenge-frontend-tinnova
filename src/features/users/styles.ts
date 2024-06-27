import styled from 'styled-components'

import { Divider as UIDivider } from '~ui'

type TableProps = {
  $isEmpty: boolean
}

export const Divider = styled(UIDivider)`
  display: none;
  @media (max-width: 768px) {
    display: inline;
  }
`

export const Table = styled.table<TableProps>`
  border-collapse: separate;
  border-spacing: 0;
  user-select: none;
  table-layout: fixed;
  white-space: nowrap;
  width: 100%;
  word-break: keep-all;

  th,
  td {
    border-bottom: ${({ theme }) => `1px solid ${theme.colors.border}`};
    overflow: hidden;
    text-align: start;
    text-overflow: ellipsis;
  }

  td {
    ${({ $isEmpty }) => $isEmpty && 'border-bottom: none;'}
  }

  th {
    padding: 0.5rem;
  }

  td {
    border-top: none;
    padding: 0.5rem;
    text-align: left;
  }

  th:last-child {
    text-align: right;
    width: 100px;
  }

  tr:hover {
    background-color: #f2f2f2;
  }

  @media (max-width: 768px) {
    thead tr {
      display: ${({ $isEmpty }) => !$isEmpty && 'none'};
    }
  }
`

export const TableBody = styled.tbody<TableProps>`
  @media (max-width: 768px) {
    display: ${({ $isEmpty }) => !$isEmpty && 'flex'};
    flex-direction: column;
  }
`
