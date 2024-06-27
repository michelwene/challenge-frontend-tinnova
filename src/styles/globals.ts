/*
 * createGlobalStyle renomeado para css assim o prettier consegue formatar os valores
 */

import { createGlobalStyle as css } from 'styled-components'

import { colors } from './theme/colors'

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

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${colors.border};
  }

  ::-webkit-scrollbar-thumb {
    background: #fff;
    border-radius: 50px;
    background: ${colors.scrollbarThumb};
    width: 50px;
    scrollbar-width: auto;
  }

  ::-webkit-scrollbar-corner {
    background: ${colors.border};
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
`
