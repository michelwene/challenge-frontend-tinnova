/*
 * createGlobalStyle renomeado para css assim o prettier consegue formatar os valores
 */

import { createGlobalStyle as css } from 'styled-components'

export const GlobalStyle = css`
  * {
    outline: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style-type: none;
  }

  #__next {
    min-height: 100vh;
  }
`
