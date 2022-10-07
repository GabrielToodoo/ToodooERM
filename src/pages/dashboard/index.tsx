import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { parseCookies } from 'nookies'
import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import withAuthentication from '../../hocs/with-authentication'

// import { Container } from './styles';

const DashHome: React.FC = () => {
  const { user } = useContext(AuthContext)

  return (
    <>
      <Head>
        <title>Toodoo ERM - Dashboard</title>
      </Head>
      <h1>Hello {user.name}</h1>
    </>
  )
}

export default DashHome

export const getServerSideProps: GetServerSideProps = withAuthentication
