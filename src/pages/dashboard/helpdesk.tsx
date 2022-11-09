import React, { ReactElement, useContext, useEffect, useMemo } from 'react'

import { GetServerSideProps } from 'next'

import { AuthContext } from '../../contexts/AuthContext'
import { ModalContext } from '../../contexts/ModalContext'

import Dashboard, { useLayout } from '../../templates/Dashboard'

import { NextPageWithLayout } from '../_app'
import { HelpDeskContent } from '../../styles/pages/Dashboard/helpdesk'

import withAuthentication from '../../hocs/with-authentication'

import Loading from '../../components/Loading'
import Badge, { BadgeType } from '../../components/Badge'
import ToodooTable from '../../components/ToodooTable'
import HelpdeskModal from '../../components/HelpdeskModal'

const Page: NextPageWithLayout = () => {
  const { isLoading, setLoading } = useLayout()
  const { user } = useContext(AuthContext)

  const { callModal, setCloseable } = useContext(ModalContext)

  const columns = useMemo(
    () => [
      {
        Header: 'Título',
        accessor: 'title',
        width: 80,
        Cell: ({ value }: any) => <b>{value}</b>
      },
      {
        Header: 'Categoria',
        accessor: 'category',
        width: 'auto'
      },
      {
        Header: 'Data',
        accessor: 'data',
        width: 'auto'
      },
      {
        Header: 'Status',
        accessor: 'status',
        width: 'auto',
        Cell: ({ value }: any) => (
          <Badge
            type={
              value === 'WAITING'
                ? BadgeType.WARNING
                : value === 'FINISHED'
                ? BadgeType.ERROR
                : BadgeType.SUCCESS
            }
          >
            {value === 'WAITING'
              ? 'Em andamento'
              : value === 'FINISHED'
              ? 'Finalizado'
              : 'Aberto'}
          </Badge> // Make switch case for each badge
        )
      }
    ],
    []
  )

  const data = useMemo(
    () => [
      {
        title: 'Contrato de Estágio',
        category: 'Recursos Humanos',
        data: '02 jun 2021',
        status: 'SUCCESS'
      },
      {
        title: 'Contrato de Estágio',
        category: 'Recursos Humanos',
        data: '02 jun 2021',
        status: 'FINISHED'
      },
      {
        title: 'Contrato de Estágio',
        category: 'Recursos Humanos',
        data: '02 jun 2021',
        status: 'WAITING'
      },
      {
        title: 'Contrato de Estágio',
        category: 'Recursos Humanos',
        data: '02 jun 2021',
        status: 'WAITING'
      },
      {
        title: 'Contrato de Estágio',
        category: 'Recursos Humanos',
        data: '02 jun 2021',
        status: 'WAITING'
      },
      {
        title: 'Contrato de Estágio',
        category: 'Recursos Humanos',
        data: '02 jun 2021',
        status: 'WAITING'
      },
      {
        title: 'Contrato de Estágio',
        category: 'Recursos Humanos',
        data: '02 jun 2021',
        status: 'FINISHED'
      },
      {
        title: 'Contrato de Estágio',
        category: 'Recursos Humanos',
        data: '02 jun 2021',
        status: 'WAITING'
      },
      {
        title: 'Contrato de Estágio',
        category: 'Recursos Humanos',
        data: '02 jun 2021',
        status: 'WAITING'
      },
      {
        title: 'Contrato de Estágio',
        category: 'Recursos Humanos',
        data: '02 jun 2021',
        status: 'WAITING'
      },
      {
        title: 'Contrato de Estágio',
        category: 'Recursos Humanos',
        data: '02 jun 2021',
        status: 'WAITING'
      },
      {
        title: 'Contrato de Estágio',
        category: 'Recursos Humanos',
        data: '02 jun 2021',
        status: 'WAITING'
      },
      {
        title: 'Contrato de Estágio',
        category: 'Recursos Humanos',
        data: '02 jun 2021',
        status: 'WAITING'
      },
      {
        title: 'Contrato de Estágio',
        category: 'Recursos Humanos',
        data: '02 jun 2021',
        status: 'WAITING'
      },
      {
        title: 'Contrato de Estágio',
        category: 'Recursos Humanos',
        data: '02 jun 2021',
        status: 'WAITING'
      }
    ],
    []
  )

  async function loadDashboard() {
    setLoading(false)
  }

  function openModal() {
    setCloseable(false)
    callModal(<HelpdeskModal />)
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
          <h4 className="heading-dashboard mb-5">Helpdesk</h4>
          <ToodooTable
            columns={columns}
            search
            onSubmit={openModal}
            button={{
              buttonLabel: 'Nova solicitação',
              buttonIcon: (
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
              )
            }}
            data={data}
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

/*

Legacy Table


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

*/
