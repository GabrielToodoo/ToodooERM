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
    setLoading(false)
  }

  useEffect(() => {
    loadDashboard()
  }, [])

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <h4 className="heading-dashboard">Meu time</h4>
        </>
      )}
    </>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Dashboard title="Meu time">{page}</Dashboard>
}

export const getServerSideProps: GetServerSideProps = withAuthentication

export default Page
