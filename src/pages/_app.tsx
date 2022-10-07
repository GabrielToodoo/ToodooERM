import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import { ThemeProvider } from 'styled-components'
import SSRProvider from 'react-bootstrap/SSRProvider'

import type { AppProps } from 'next/app'

import GlobalStyle from '../styles/global'

import theme from '../styles/theme'
import { AuthProvider } from '../contexts/AuthContext'
import { ModalProvider } from '../contexts/ModalContext'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <SSRProvider>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <ModalProvider>
            {/*<SignIn /> */}
            <Component {...pageProps} />
            <GlobalStyle />
          </ModalProvider>
        </AuthProvider>
      </ThemeProvider>
    </SSRProvider>
  )
}

export default MyApp
