import React, { ReactElement, useContext, useEffect } from 'react'

import { GetServerSideProps } from 'next'

import { AuthContext } from '../../contexts/AuthContext'

import Dashboard, { useLayout } from '../../templates/Dashboard'

import { NextPageWithLayout } from '../_app'

import withAuthentication from '../../hocs/with-authentication'
import Loading from '../../components/Loading'

const Page: NextPageWithLayout = () => {
  const { isLoading, setLoading } = useLayout()
  const { user } = useContext(AuthContext)

  async function loadDashboard() {
    //setLoading(false)
  }

  useEffect(() => {
    setLoading(true)
    loadDashboard()
  }, [])

  return <>{isLoading ? <Loading /> : <></>}</>
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Dashboard title="Perfil">{page}</Dashboard>
}

export const getServerSideProps: GetServerSideProps = withAuthentication

export default Page
