import React, { ReactElement, useContext, useEffect, useMemo } from 'react'

import { GetServerSideProps } from 'next'

import { AuthContext } from '../../contexts/AuthContext'

import Dashboard, { useLayout } from '../../templates/Dashboard'

import { NextPageWithLayout } from '../_app'

import withAuthentication from '../../hocs/with-authentication'
import Loading from '../../components/Loading'
import ToodooTable from '../../components/ToodooTable'

interface TeamMember {
  name: string
  picture: string
}

interface TeamData {
  collaborator: TeamMember
  position: string
  city: string
  squad: string
}

const Page: NextPageWithLayout = () => {
  const { isLoading, setLoading } = useLayout()
  const { user } = useContext(AuthContext)

  async function loadDashboard() {
    setLoading(false)
  }

  const data = useMemo<TeamData[]>(
    () => [
      {
        collaborator: {
          name: 'Aline Santesso',
          picture: 'https://xsgames.co/randomusers/assets/avatars/female/77.jpg'
        },
        position: 'CSO',
        city: 'São Paulo',
        squad: 'AL5'
      },
      {
        collaborator: {
          name: 'Ana Luiza Terra',
          picture: 'https://xsgames.co/randomusers/assets/avatars/female/17.jpg'
        },
        position: 'Intern',
        city: 'Itajubá',
        squad: 'Toodoo ERM'
      },
      {
        collaborator: {
          name: 'Andréa Dalbao',
          picture: 'https://xsgames.co/randomusers/assets/avatars/female/27.jpg'
        },
        position: 'Head Business Partner',
        city: 'São Paulo',
        squad: 'Human Resources'
      },
      {
        collaborator: {
          name: 'Caroline Fonseca',
          picture: 'https://xsgames.co/randomusers/assets/avatars/female/37.jpg'
        },
        position: 'Trainee',
        city: 'Minas Gerais',
        squad: 'Toodoo University'
      }
    ],
    []
  )

  const columns = useMemo(
    () => [
      {
        Header: 'Colaborador',
        accessor: 'collaborator',
        width: 80,
        Cell: ({ value }: any) => (
          <>
            <img
              className="rounded-circle"
              src={(value as TeamMember).picture}
              width="40"
              height="40"
              style={{ marginRight: '20px' }}
            />{' '}
            <b>{(value as TeamMember).name}</b>
          </>
        )
      },
      {
        Header: 'Posição',
        accessor: 'position',
        width: 'auto'
      },
      {
        Header: 'Cidade',
        accessor: 'city',
        width: 'auto'
      },
      {
        Header: 'Squad',
        accessor: 'squad',
        width: 'auto'
      }
    ],
    []
  )

  function getCsvFormattedData() {
    const result = data.map(data => {
      return {
        Colaborador: data.collaborator.name,
        Posição: data.position,
        Cidade: data.city,
        Squad: data.squad
      }
    })
    console.log(result)

    return result
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
          <h4 className="heading-dashboard mb-5">Meu time</h4>
          <ToodooTable
            columns={columns}
            search
            csvData={getCsvFormattedData()}
            button={{
              buttonLabel: 'Exportar lista',
              buttonIcon: (
                <svg
                  width="12"
                  height="14"
                  viewBox="0 0 12 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.50002 12H10.5C10.69 12.0001 10.873 12.0722 11.0118 12.202C11.1507 12.3317 11.2351 12.5093 11.248 12.6989C11.261 12.8885 11.2015 13.0759 11.0816 13.2233C10.9617 13.3707 10.7903 13.4671 10.602 13.493L10.5 13.5H1.50002C1.30999 13.4999 1.12707 13.4278 0.988224 13.298C0.849373 13.1683 0.764942 12.9907 0.75199 12.8011C0.739038 12.6115 0.798531 12.4241 0.918448 12.2767C1.03837 12.1293 1.20977 12.0329 1.39802 12.007L1.50002 12H10.5H1.50002ZM5.89802 0.00699997L6.00002 0C6.18125 7.6429e-06 6.35636 0.0656428 6.49295 0.184767C6.62953 0.303892 6.71837 0.468446 6.74302 0.648L6.75002 0.75V8.438L9.00502 6.184C9.13219 6.05687 9.3008 5.97966 9.48014 5.96645C9.65947 5.95323 9.83758 6.00489 9.98202 6.112L10.066 6.184C10.1931 6.31117 10.2704 6.47979 10.2836 6.65912C10.2968 6.83845 10.2451 7.01657 10.138 7.161L10.066 7.245L6.53001 10.78C6.40303 10.907 6.23467 10.9842 6.05556 10.9976C5.87645 11.011 5.69849 10.9597 5.55402 10.853L5.47002 10.78L1.93402 7.245C1.79982 7.11118 1.72127 6.93151 1.71415 6.74213C1.70703 6.55274 1.77186 6.36768 1.89563 6.22416C2.01939 6.08063 2.1929 5.98928 2.38127 5.96848C2.56965 5.94767 2.75891 5.99895 2.91102 6.112L2.99502 6.184L5.25002 8.44V0.75C5.25002 0.568762 5.31566 0.393658 5.43478 0.257069C5.55391 0.120481 5.71846 0.0316483 5.89802 0.00699997L6.00002 0L5.89802 0.00699997Z"
                    fill="white"
                  />
                </svg>
              )
            }}
            data={data}
          />
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
