import type { AppProps } from 'next/app'

import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '~styles/globals'
import { theme } from '~styles/theme'

import { LoaderProvider } from 'src/@context/loaderContext'

import 'react-toastify/dist/ReactToastify.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ToastContainer hideProgressBar autoClose={3000} />
        <LoaderProvider>
          <Component {...pageProps} />
        </LoaderProvider>
      </ThemeProvider>
    </>
  )
}
