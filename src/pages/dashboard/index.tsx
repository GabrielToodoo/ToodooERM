import { GetServerSideProps } from 'next'
import React, { useContext, useEffect, useState } from 'react'

import TimeAgo from 'react-timeago'
import ptBrStrings from 'react-timeago/lib/language-strings/pt-br'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'

import Box from '../../components/Box'

import { AuthContext } from '../../contexts/AuthContext'
import withAuthentication from '../../hocs/with-authentication'
import DashboardTemplate from '../../templates/DashboardTemplate'

import { getDashboardBirthdays, getDashboardNews } from '../../services/dash'
import { BirthDay, NewsLetter } from '../../mock/dash-home'
import { BirthdayDetails, NewsTitle } from '../../styles/pages/dash'

const DashHome: React.FC = () => {
  const [loading, setLoading] = useState(true)
  const { user } = useContext(AuthContext)

  const [news, setNews] = useState<NewsLetter[]>([])

  const [birthdays, setBirthdays] = useState<BirthDay[]>([])

  useEffect(() => {
    loadDashboard()
  }, [])

  async function loadDashboard() {
    const response = await getDashboardNews()
    setNews(response)

    const birthDays = await getDashboardBirthdays()
    setBirthdays(birthDays)

    setLoading(false)
  }

  return (
    <DashboardTemplate title="Home" loading={loading} activeRoute={0}>
      <h3>Olá, {user?.name?.split(' ').slice(0, 1).join(' ')}!</h3>
      <p className="text-muted">Bem-vindo(a) de volta.</p>
      <div className="container-fluid p-0 m-0 mt-5">
        <NewsTitle>NOTÍCIAS E ANÚNCIOS</NewsTitle>
        <div className="container p-0 m-0 row">
          <div className="col-9 p-0 m-0">
            <h1>aa</h1>
          </div>
          <div className="col-lg-3">
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
    </DashboardTemplate>
  )
}

export default DashHome

export const getServerSideProps: GetServerSideProps = withAuthentication
