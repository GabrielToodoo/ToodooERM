import React, {
  ReactElement,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react'

import { GetServerSideProps } from 'next'

import { nFormatter } from '../../helpers/currency-utils'

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
  VerticalTimeline,
  CorpWrapper
} from '../../styles/pages/Dashboard/corp'
import dynamic from 'next/dynamic'

import { Benefit, SalaryHistory, Vacation } from '../../services/types/dash'
import { getCorpData } from '../../services/dash'
import { formatDate } from '../../helpers/date-utils'
import { ModalContext } from '../../contexts/ModalContext'

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

export interface RemunerationInfo {
  currentSalary: SalaryHistory
  salaryHistories: SalaryHistory[]
}

export interface CorpInfo {
  vacations: Vacation[]
  remuneration: RemunerationInfo
  benefits: Benefit[]
}

const Page: NextPageWithLayout = () => {
  const { isLoading, setLoading } = useLayout()
  const { user } = useContext(AuthContext)
  const { callModal } = useContext(ModalContext)

  const [info, setInfo] = useState<CorpInfo>({} as CorpInfo)

  const [chartData, setChartData] = useState<number[]>()

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
          <Badge type={BadgeType[value] as never}>
            {value == 'SUCCESS' ? 'Aprovado' : 'Em análise'}
          </Badge>
        )
      }
    ],
    []
  )

  async function loadDashboard() {
    setLoading(true)

    if (user.id) {
      try {
        const corpInfo = await getCorpData(user.id)

        setInfo(corpInfo)
        setChartData(
          corpInfo.remuneration.salaryHistories.map(history => history.salary)
        )
      } catch (err) {
        console.log(err)
      }
      setLoading(false)
    }
  }

  function openRequestVacationModal() {
    callModal(
      <>
        <h5>Solicitar férias</h5>
      </>
    )
  }

  useEffect(() => {
    loadDashboard()
  }, [user])

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <main>
          <h4 className="heading-dashboard">Dados corporativos</h4>
          <CorpWrapper className="row mt-5">
            <div className="col-md-8 ">
              <ToodooTable
                columns={columns}
                title="Férias"
                className="vacation-wrapper"
                onSubmit={openRequestVacationModal}
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
                data={
                  info?.vacations?.map(vacation => {
                    return {
                      start: formatDate(vacation.dateStart, 'dd/MM/yyyy'),
                      end: formatDate(vacation.dateStart, 'dd/MM/yyyy'),
                      status:
                        vacation.status == 'Pendente' ? 'WAITING' : 'SUCCESS'
                    }
                  }) ?? []
                }
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
                    <b>
                      $
                      {nFormatter(
                        info?.remuneration?.currentSalary?.salary ?? 0,
                        1
                      )}
                    </b>
                  </b>
                </div>
                <div className="text-light-muted text-sm mb-4">
                  <b className="text-primary">
                    +{info?.remuneration?.currentSalary?.percentage}%
                  </b>{' '}
                  desde{' '}
                  {info?.remuneration?.salaryHistories.length >= 2
                    ? formatDate(
                        info?.remuneration?.salaryHistories[
                          info?.remuneration?.salaryHistories.length - 2
                        ].date,
                        'MMM/dd'
                      )
                    : 'o início'}
                </div>
                <div className="text-xs text-primary text-bold">TIMELINE</div>
                <VerticalTimeline>
                  {info?.remuneration?.salaryHistories
                    .slice(0, 3)
                    .map(salary => {
                      return (
                        <li>
                          <div className="tm-item">
                            <div className="h5 text-bold">
                              ${nFormatter(salary?.salary ?? 0, 1)}
                            </div>
                            <div className="text-light-muted text-sm">
                              {formatDate(salary?.date, 'MMM/dd')}
                            </div>
                          </div>
                          <span className="text-primary text-sm">
                            +{salary?.percentage ?? 0}%
                          </span>
                        </li>
                      )
                    })}
                </VerticalTimeline>
                <ReactApexChart
                  options={chartOptions as never}
                  series={[
                    {
                      name: '$',
                      data:
                        (chartData?.length == 1
                          ? [0, chartData[0]]
                          : chartData) ?? []
                    }
                  ]}
                  type="area"
                  height={160}
                />
              </Box>
            </div>
          </CorpWrapper>
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
