import React, { createContext, useState } from 'react'
import Head from 'next/head'
import Loading from '../components/Loading'

type Props = { children: React.ReactNode }

interface GlobalLoadingProps {
  setLoading: (state: boolean) => void
}

export const GlobalLoadingContext = createContext({} as GlobalLoadingProps)

export const GlobalLoadingProvider: React.FC<Props> = ({ children }) => {
  const [isGlobalLoading, setGlobalLoading] = useState(false)

  function setLoading(state: boolean) {
    setGlobalLoading(state)
  }

  return (
    <GlobalLoadingContext.Provider value={{ setLoading }}>
      <Head>
        <title>Toodoo ERM - Carregando...</title>
      </Head>

      {isGlobalLoading ? (
        <main className="vh-100 vw-100 d-flex align-content-center justify-content-center">
          <Loading />
        </main>
      ) : (
        children
      )}
    </GlobalLoadingContext.Provider>
  )
}
