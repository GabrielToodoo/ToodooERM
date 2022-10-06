import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import React from 'react'
import withAuthentication from '../../hocs/with-authentication'

// import { Container } from './styles';

const DashHome: React.FC = () => {
  return (
    <>
      <h1>Hello dashboard!</h1>
    </>
  )
}

export default DashHome

export const getServerSideProps: GetServerSideProps = withAuthentication
