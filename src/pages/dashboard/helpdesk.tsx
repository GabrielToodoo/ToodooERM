import React, { ReactElement, useContext, useEffect, useState } from 'react'

import { GetServerSideProps } from 'next'

import { AuthContext } from '../../contexts/AuthContext'

import Dashboard, { useLayout } from '../../templates/Dashboard'

import { NextPageWithLayout } from '../_app'

import withAuthentication from '../../hocs/with-authentication'
import Loading from '../../components/Loading'
import Table from '../../components/Table'
import { HelpDeskContent } from '../../styles/pages/Dashboard/helpdesk'
import Badge, { BadgeType } from '../../components/Badge'

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
        <HelpDeskContent>
          <h4 className="heading-dashboard">Helpdesk</h4>
          <Table
            mt="64px"
            searchIndex="title"
            columns={[
              {
                key: 'title',
                name: 'Título'
              },
              {
                key: 'category',
                name: 'Categoria'
              },
              {
                key: 'data',
                name: 'Data'
              },
              {
                key: 'status',
                name: 'Status'
              }
            ]}
            data={[
              {
                title: 'Contrato de Estágio',
                category: 'Recursos Humanos',
                data: '02 jun 2021',
                status: <Badge type={BadgeType.WARNING}>Em andamento</Badge>
              },
              {
                title: 'Contrato de Estágio',
                category: 'Recursos Humanos',
                data: '02 jun 2021',
                status: <Badge type={BadgeType.WARNING}>Em andamento</Badge>
              },
              {
                title: 'Contrato de Estágio',
                category: 'Recursos Humanos',
                data: '02 jun 2021',
                status: <Badge type={BadgeType.WARNING}>Em andamento</Badge>
              },
              {
                title: 'Contrato de Estágio',
                category: 'Recursos Humanos',
                data: '02 jun 2021',
                status: <Badge type={BadgeType.WARNING}>Em andamento</Badge>
              },
              {
                title: 'Contrato de Estágio',
                category: 'Recursos Humanos',
                data: '02 jun 2021',
                status: <Badge type={BadgeType.WARNING}>Em andamento</Badge>
              },
              {
                title: 'Contrato de Estágio',
                category: 'Recursos Humanos',
                data: '02 jun 2021',
                status: <Badge type={BadgeType.WARNING}>Em andamento</Badge>
              },
              {
                title: 'Contrato de Estágio',
                category: 'Recursos Humanos',
                data: '02 jun 2021',
                status: <Badge type={BadgeType.WARNING}>Em andamento</Badge>
              },
              {
                title: 'Contrato de Estágio',
                category: 'Recursos Humanos',
                data: '02 jun 2021',
                status: <Badge type={BadgeType.WARNING}>Em andamento</Badge>
              },
              {
                title: 'Contrato de Estágio',
                category: 'Recursos Humanos',
                data: '02 jun 2021',
                status: <Badge type={BadgeType.WARNING}>Em andamento</Badge>
              },
              {
                title: 'Contrato de Estágio',
                category: 'Recursos Humanos',
                data: '02 jun 2021',
                status: <Badge type={BadgeType.WARNING}>Em andamento</Badge>
              },
              {
                title: 'Contrato de Estágio',
                category: 'Recursos Humanos',
                data: '02 jun 2021',
                status: <Badge type={BadgeType.WARNING}>Em andamento</Badge>
              },
              {
                title: 'Contrato de Estágio',
                category: 'Recursos Humanos',
                data: '02 jun 2021',
                status: <Badge type={BadgeType.WARNING}>Em andamento</Badge>
              },
              {
                title: 'Contrato de Estágio',
                category: 'Recursos Humanos',
                data: '02 jun 2021',
                status: <Badge type={BadgeType.WARNING}>Em andamento</Badge>
              }
            ]}
            buttonLabel="Nova Solicitação"
            icon={
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 8.57143H9.57143V12H8.42857V8.57143H5V7.42857H8.42857V4H9.57143V7.42857H13V8.57143Z"
                  fill="white"
                />
              </svg>
            }
          />
        </HelpDeskContent>
      )}
    </>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Dashboard title="Helpdesk">{page}</Dashboard>
}

export const getServerSideProps: GetServerSideProps = withAuthentication

export default Page
