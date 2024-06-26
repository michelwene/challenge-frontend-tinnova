import type { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '~styles/globals'
import { theme } from '~styles/theme'

import StyledComponentsRegistry from 'src/lib/registry'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <StyledComponentsRegistry>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </StyledComponentsRegistry>
    </>
  )
}
