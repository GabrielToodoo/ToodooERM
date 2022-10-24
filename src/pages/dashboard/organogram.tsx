import React, { ReactElement, useContext, useEffect, useState } from 'react'

import { GetServerSideProps } from 'next'

import dynamic from 'next/dynamic'

import { AuthContext } from '../../contexts/AuthContext'

import Dashboard, { useLayout } from '../../templates/Dashboard'

import { NextPageWithLayout } from '../_app'

import withAuthentication from '../../hocs/with-authentication'
import Loading from '../../components/Loading'
import {
  OptionsContainer,
  OrganogramContainer,
  Wrapper
} from '../../styles/pages/Dashboard/organogram'
import Box from '../../components/Box'

enum OrganogramType {
  MY_TEAM,
  GENERAL
}

const Page: NextPageWithLayout = () => {
  const { isLoading, setLoading } = useLayout()
  const { user } = useContext(AuthContext)

  const [selected, setSelected] = useState<OrganogramType>(
    OrganogramType.MY_TEAM
  )

  const Organogram = dynamic(
    () => {
      return import('../../components/Organogram')
    },
    { ssr: false }
  )

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
          <h4 className="heading-dashboard">Organograma</h4>
          <Wrapper>
            <OptionsContainer>
              <li
                className={selected === OrganogramType.MY_TEAM ? 'active' : ''}
                onClick={() => setSelected(OrganogramType.MY_TEAM)}
              >
                Meu time
              </li>
              <li
                className={selected === OrganogramType.GENERAL ? 'active' : ''}
                onClick={() => setSelected(OrganogramType.GENERAL)}
              >
                Geral
              </li>
            </OptionsContainer>

            <OrganogramContainer>
              <Organogram />
            </OrganogramContainer>
          </Wrapper>
        </>
      )}
    </>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Dashboard title="Organograma">{page}</Dashboard>
}

export const getServerSideProps: GetServerSideProps = withAuthentication

export default Page
