import React, { ReactElement, useContext, useEffect, useState } from 'react'

import { GetServerSideProps } from 'next'

import dynamic from 'next/dynamic'

import { AuthContext } from '../../contexts/AuthContext'
import { ModalContext } from '../../contexts/ModalContext'

import Dashboard, { useLayout } from '../../templates/Dashboard'

import { NextPageWithLayout } from '../_app'

import withAuthentication from '../../hocs/with-authentication'
import { getMyTeamOrganogram, getGeneralOrganogram } from '../../services/dash'
import { OrganogramNode } from '../../mock/dash-organogram'

import Loading from '../../components/Loading'
import Modal from '../../components/Modal'
import theme from '../../styles/theme'

import {
  OptionsContainer,
  OrganogramContainer,
  Wrapper
} from '../../styles/pages/Dashboard/organogram'

enum OrganogramType {
  MY_TEAM,
  GENERAL
}

const Page: NextPageWithLayout = () => {
  const { callModal } = useContext(ModalContext)
  const { isLoading, setLoading } = useLayout()
  //const { user } = useContext(AuthContext)

  const [selected, setSelected] = useState<OrganogramType>(
    OrganogramType.MY_TEAM
  )

  const [myTeamData, setMyTeamData] = useState<OrganogramNode>()
  const [generalData, setGeneralData] = useState<OrganogramNode>()

  const Organogram = dynamic(
    () => {
      return import('../../components/Organogram')
    },
    { ssr: false }
  )

  async function loadDashboard() {
    try {
      setLoading(true)

      const teamResponse = await getMyTeamOrganogram()
      setMyTeamData(teamResponse)

      const generalResponse = await getGeneralOrganogram()
      setGeneralData(generalResponse)
    } catch (err) {
      callModal(
        <Modal
          title="Ocorreu um erro"
          color={theme.colors.colorError}
          description="Ocorreu um erro ao tentar carregar o organograma."
          image="/icons/error-icon.svg"
        />
      )
    }
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
        <Wrapper>
          <h4 className="heading-dashboard">Organograma</h4>
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
            <Organogram
              data={
                selected === OrganogramType.GENERAL ? generalData : myTeamData
              }
            />
          </OrganogramContainer>
        </Wrapper>
      )}
    </>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Dashboard title="Organograma">{page}</Dashboard>
}

export const getServerSideProps: GetServerSideProps = withAuthentication

export default Page
