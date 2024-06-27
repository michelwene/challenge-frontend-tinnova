import type { AppProps } from 'next/app'

import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '~styles/globals'
import { theme } from '~styles/theme'

import StyledComponentsRegistry from 'src/lib/registry'

import 'react-toastify/dist/ReactToastify.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <StyledComponentsRegistry>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <ToastContainer hideProgressBar autoClose={3000} />
          <Component {...pageProps} />
        </ThemeProvider>
      </StyledComponentsRegistry>
    </>
  )
}
