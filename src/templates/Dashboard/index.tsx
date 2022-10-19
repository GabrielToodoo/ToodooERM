import React, { useState } from 'react'

import Head from 'next/head'

import Sidebar from './Sidebar'

import { Wrapper, Content } from './styles'

type Props = {
  title: string

  children: React.ReactNode
}

type ContextProps = {
  isLoading: boolean

  setLoading(value: boolean): void
}

const Context = React.createContext({} as ContextProps)

const Dashboard = ({ title, children }: Props) => {
  const [isLoading, setLoading] = useState(true)

  return (
    <main>
      <Context.Provider value={{ isLoading, setLoading }}>
        <Head>
          <title>{title} - Toodoo ERM</title>
        </Head>
        <Wrapper>
          <Sidebar />
          <Content>{children}</Content>
        </Wrapper>
      </Context.Provider>
    </main>
  )
}

export const useLayout = () => {
  const selector = React.useContext(Context)

  return selector
}

export default Dashboard
