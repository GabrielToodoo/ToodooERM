import React, { ReactElement, useContext, useEffect, useMemo } from 'react'

import { GetServerSideProps } from 'next'

import { AuthContext } from '../../contexts/AuthContext'

import Dashboard, { useLayout } from '../../templates/Dashboard'

import { NextPageWithLayout } from '../_app'

import withAuthentication from '../../hocs/with-authentication'
import Loading from '../../components/Loading'
import Box from '../../components/Box'
import ToodooTable from '../../components/ToodooTable'
import Badge, { BadgeType } from '../../components/Badge'
import {
  BenefitsList,
  VerticalTimeline
} from '../../styles/pages/Dashboard/corp'
import dynamic from 'next/dynamic'

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

const Page: NextPageWithLayout = () => {
  const { isLoading, setLoading } = useLayout()
  const { user } = useContext(AuthContext)

  function nFormatter(num: number, digits: number) {
    const lookup = [
      { value: 1, symbol: '' },
      { value: 1e3, symbol: 'k' },
      { value: 1e6, symbol: 'M' },
      { value: 1e9, symbol: 'G' },
      { value: 1e12, symbol: 'T' },
      { value: 1e15, symbol: 'P' },
      { value: 1e18, symbol: 'E' }
    ]
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/
    var item = lookup
      .slice()
      .reverse()
      .find(function (item) {
        return num >= item.value
      })
    return item
      ? (num / item.value).toFixed(digits).replace(rx, '$1') + item.symbol
      : '0'
  }

  const chartOptions = {
    chart: {
      type: 'area',
      height: 160,
      sparkline: {
        enabled: true
      }
    },
    stroke: {
      curve: 'smooth',
      colors: ['#3E4DAA'],
      width: 1.5
    },
    markers: {
      colors: ['#FFF'],
      strokeColors: '#3E4DAA'
    },
    fill: {
      colors: ['#3E4DAA'],
      opacity: 0.3,
      gradient: {
        shadeIntensity: 1
      }
    },
    xaxis: {
      crosshairs: {
        width: 1
      }
    },
    yaxis: {
      labels: {
        show: false
      }
    },
    tooltip: {
      custom: function ({ series, seriesIndex, dataPointIndex, w }: any) {
        return `<div class="graph-tooltip">
            <span>$${nFormatter(series[seriesIndex][dataPointIndex], 1)}</span>
          </div>`
      }
    }
  }

  const chartSeries = [
    {
      name: '$',
      data: [2500, 3000, 3500]
    }
  ]

  const columns = useMemo(
    () => [
      {
        Header: 'Início previsto',
        accessor: 'start'
      },
      {
        Header: 'Retorno previsto',
        accessor: 'end'
      },
      {
        Header: 'Status',
        accessor: 'status',
        Cell: ({ value }: any) => (
          <Badge type={BadgeType[value] as never}>{value}</Badge> // Make switch case for each badge
        )
      }
    ],
    []
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
        <main>
          <h4 className="heading-dashboard">Dados corporativos</h4>
          <div className="row mt-5">
            <div className="col-md-8">
              <ToodooTable
                columns={columns}
                title="Férias"
                button={{
                  buttonLabel: 'Solicitar férias',
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
                data={[
                  {
                    start: '14/05/2020',
                    end: '24/05/2020',
                    status: 'SUCCESS'
                  },
                  {
                    start: '14/05/2020',
                    end: '24/05/2020',
                    status: 'WAITING'
                  },
                  {
                    start: '14/05/2020',
                    end: '24/05/2020',
                    status: 'WAITING'
                  }
                ]}
                withPagination={false}
              />
              <Box mt="24px">
                <div className="text-primary h6">Benefícios</div>
                <BenefitsList>
                  <li>
                    VR - Vale Refeição
                    <span>R$200,00</span>
                  </li>
                  <li>
                    VA - Vale Alimentação
                    <span>R$300,00</span>
                  </li>
                  <li>
                    VT - Vale Transporte
                    <span>R$300,00</span>
                  </li>
                </BenefitsList>
              </Box>
            </div>
            <div className="col-md-4">
              <Box>
                <div className="text-primary h6">Remuneração</div>
                <div className="display-5 mt-3">
                  <b>
                    <b>$3.8k</b>
                  </b>
                </div>
                <div className="text-light-muted text-sm mb-4">
                  <b className="text-primary">+18%</b> desde jun/19
                </div>
                <div className="text-xs text-primary text-bold">TIMELINE</div>
                <VerticalTimeline>
                  <li>
                    <div className="tm-item">
                      <div className="h5 text-bold">$2,5k</div>
                      <div className="text-light-muted text-sm">jun/19</div>
                    </div>
                    <span className="text-primary text-sm">+0%</span>
                  </li>
                  <li>
                    <div className="tm-item">
                      <div className="h5 text-bold">$3,0k</div>
                      <div className="text-light-muted text-sm">jan/20</div>
                    </div>
                    <span className="text-primary text-sm">+20%</span>
                  </li>
                  <li>
                    <div className="tm-item">
                      <div className="h5 text-bold">$3,5k</div>
                      <div className="text-light-muted text-sm">set/20</div>
                    </div>
                    <span className="text-primary text-sm">+16%</span>
                  </li>
                </VerticalTimeline>
                <ReactApexChart
                  options={chartOptions as never}
                  series={chartSeries}
                  type="area"
                  height={160}
                />
              </Box>
            </div>
          </div>
        </main>
      )}
    </>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Dashboard title="Dados corporativos">{page}</Dashboard>
}

export const getServerSideProps: GetServerSideProps = withAuthentication

export default Page
