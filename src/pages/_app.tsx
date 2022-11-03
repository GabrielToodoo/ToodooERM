import React, { ReactElement, ReactNode } from 'react'

import { NextPage } from 'next'
import type { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'
import SSRProvider from 'react-bootstrap/SSRProvider'

import { AuthProvider } from '../contexts/AuthContext'
import { ModalProvider } from '../contexts/ModalContext'
import { GlobalLoadingProvider } from '../contexts/GlobalLoadingContext'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

import 'bootstrap/dist/css/bootstrap.min.css'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? (page => page)

  return (
    <SSRProvider>
      <ThemeProvider theme={theme}>
        <GlobalLoadingProvider>
          <AuthProvider>
            <ModalProvider>
              {getLayout(<Component {...pageProps} />)}
              <GlobalStyle />
            </ModalProvider>
          </AuthProvider>
        </GlobalLoadingProvider>
      </ThemeProvider>
    </SSRProvider>
  )
}

export default MyApp
