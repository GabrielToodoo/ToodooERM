import React, { ReactElement, useContext, useEffect, useState } from 'react'

import TimeAgo from 'react-timeago'

//@ts-ignore
import ptBrStrings from 'react-timeago/lib/language-strings/pt-br'
//@ts-ignore
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'

import { GetServerSideProps } from 'next'
import { NextPageWithLayout } from '../_app'

import { AuthContext } from '../../contexts/AuthContext'
import { ModalContext } from '../../contexts/ModalContext'
import withAuthentication from '../../hocs/with-authentication'

import Dashboard, { useLayout } from '../../templates/Dashboard'

import Box from '../../components/Box'
import Loading from '../../components/Loading'
import Modal from '../../components/Modal'

import { BirthDay, NewsLetter, ScheduledVacation } from '../../mock/dash-home'

import {
  getDashboardBirthdays,
  getDashboardNews,
  getScheduledVacation
} from '../../services/dash'

import theme from '../../styles/theme'

import {
  BirthdayDetails,
  NewsBox,
  NewsContainer,
  NewsTitle,
  VacationContainer,
  VacationHeader
} from '../../styles/pages/Dashboard'
import LinkButton from '../../components/Link'

const Page: NextPageWithLayout = () => {
  const { isLoading, setLoading } = useLayout()

  const { callModal } = useContext(ModalContext)
  const { user } = useContext(AuthContext)

  const [news, setNews] = useState<NewsLetter[]>([])

  const [birthdays, setBirthdays] = useState<BirthDay[]>([])

  const [scheduledVacation, setScheduledVacation] =
    useState<ScheduledVacation>()

  async function loadDashboard() {
    try {
      setLoading(true)
      const response = await getDashboardNews()
      setNews(response)

      const vacation = await getScheduledVacation()
      setScheduledVacation(vacation)

      const birthDays = await getDashboardBirthdays()
      setBirthdays(birthDays)
      setLoading(false)
    } catch (err) {
      callModal(
        <Modal
          title="Ocorreu um erro"
          color={theme.colors.colorError}
          description="Ocorreu um erro ao tentar puxar os dados da API."
          image="/icons/error-icon.svg"
        />
      )
    }
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
          <div className="d-flex flex-column">
            <div className="col-md-3 w-100">
              <h3>Olá, {user?.name?.split(' ').slice(0, 1).join(' ')}!</h3>
              <p className="text-muted" style={{ marginBottom: '44px' }}>
                Bem-vindo(a) de volta.
              </p>
              <NewsTitle>NOTÍCIAS E ANÚNCIOS</NewsTitle>
            </div>
            <div className="col-md-3 w-100">
              <div className="row">
                <div className="col-xl-9">
                  <NewsContainer>
                    {news.map(newsLetter => (
                      <NewsBox
                        key={newsLetter.title}
                        department={newsLetter.department}
                      >
                        <img
                          src={newsLetter.picture}
                          className="rounded-circle"
                          width="58"
                          height="58"
                        />
                        <div className="d-flex flex-column align-center description">
                          <h4 className="flex-item m-0 p-0">
                            {newsLetter.title}
                          </h4>
                          <p className="text-muted flex-item m-0 mt-2 p-0">
                            <span className="badge d-inline-block">
                              {newsLetter.department}
                            </span>
                            <TimeAgo
                              date={newsLetter.createdAt}
                              formatter={buildFormatter(ptBrStrings)}
                            />
                          </p>
                        </div>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.7501 5.00011L9.99956 8.74978L6.24989 5.00011L5 6.25L8.74967 9.99967L5 13.7493L6.24989 14.9992L9.99956 11.2496L13.7501 14.9992L15 13.7493L11.2503 9.99967L15 6.25L13.7501 5.00011Z"
                            fill="#939399"
                          />
                        </svg>
                      </NewsBox>
                    ))}
                  </NewsContainer>
                  <Box mt="24px">
                    <VacationHeader>
                      <h5>Férias agendadas</h5>
                      <LinkButton href="#">Requisitar mudança</LinkButton>
                    </VacationHeader>
                    <VacationContainer>
                      <div className="col-6">
                        <strong>INÍCIO PREVISTO</strong>
                        <h2>{scheduledVacation?.startAt}</h2>
                      </div>
                      <div className="col-6">
                        <strong>INÍCIO PREVISTO</strong>
                        <h2>{scheduledVacation?.endsAt}</h2>
                      </div>
                    </VacationContainer>
                  </Box>
                </div>
                <div className="col-xl-3">
                  <Box>
                    <h5>Próximos aniversários</h5>
                    <div className="mt-3">
                      {birthdays.slice(0, 7).map(birthDay => {
                        return (
                          <div className="d-flex mt-3">
                            <img
                              src={birthDay.picture}
                              alt="Picture of birthday person"
                              width="48"
                              height="48"
                              className="rounded-circle"
                            ></img>
                            <BirthdayDetails>
                              <h5>{birthDay.name}</h5>
                              <span>{birthDay.date}</span>
                            </BirthdayDetails>
                          </div>
                        )
                      })}
                    </div>
                  </Box>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Dashboard title="Home">{page}</Dashboard>
}

export const getServerSideProps: GetServerSideProps = withAuthentication

export default Page
