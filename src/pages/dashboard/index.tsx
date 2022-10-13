import React, {
  ReactElement,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react'

import { GetServerSideProps } from 'next'

import { AuthContext } from '../../contexts/AuthContext'

import Dashboard, { useLayout } from '../../templates/Dashboard'

import Box from '../../components/Box'

import { NextPageWithLayout } from '../_app'

import { getDashboardBirthdays, getDashboardNews } from '../../services/dash'
import { BirthDay, NewsLetter } from '../../mock/dash-home'
import { BirthdayDetails, NewsTitle } from '../../styles/pages/dash'

import withAuthentication from '../../hocs/with-authentication'

const Page: NextPageWithLayout = () => {
  const { setLoading } = useLayout()
  const { user } = useContext(AuthContext)

  const [_news, setNews] = useState<NewsLetter[]>([])

  const [birthdays, setBirthdays] = useState<BirthDay[]>([])

  const loadDashboard = useCallback(async () => {
    const response = await getDashboardNews()
    setNews(response)

    const birthDays = await getDashboardBirthdays()
    setBirthdays(birthDays)

    setLoading(false)
  }, [])

  useEffect(() => {
    loadDashboard()
  }, [])

  return (
    <main>
      <h3>Olá, {user?.name?.split(' ').slice(0, 1).join(' ')}!</h3>
      <p className="text-muted">Bem-vindo(a) de volta.</p>
      <NewsTitle>NOTÍCIAS E ANÚNCIOS</NewsTitle>
      <div className="row">
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
    </main>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Dashboard title="Home">{page}</Dashboard>
}

export const getServerSideProps: GetServerSideProps = withAuthentication

export default Page
