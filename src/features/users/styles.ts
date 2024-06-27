import styled from 'styled-components'

export const Table = styled.table`
  border-collapse: separate;
  border-spacing: 0;
  user-select: none;
  table-layout: fixed;
  white-space: nowrap;
  width: 100%;
  word-break: keep-all;

  th,
  td {
    border-bottom: 1px solid rgba(5, 5, 5, 0.06);
    overflow: hidden;
    text-align: start;
    text-overflow: ellipsis;
  }

  th {
    padding: 0.5rem;
  }

  td {
    border-top: none;
    padding: 0.5rem;
    text-align: left;
  }

  tr:hover {
    background-color: #f2f2f2;
  }
`
