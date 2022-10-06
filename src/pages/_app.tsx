import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import { ThemeProvider } from 'styled-components'
import SSRProvider from 'react-bootstrap/SSRProvider'

import type { AppProps } from 'next/app'

import GlobalStyle from '../styles/global'

import theme from '../styles/theme'
import SignIn from './login'
import { AuthProvider } from '../contexts/AuthContext'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <SSRProvider>
      <ThemeProvider theme={theme}>
        {/* <Component {...pageProps} /> */}
        <AuthProvider>
          <SignIn />
          <GlobalStyle />
        </AuthProvider>
      </ThemeProvider>
    </SSRProvider>
  )
}

export default MyApp
