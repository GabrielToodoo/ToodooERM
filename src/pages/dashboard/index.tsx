import { GetServerSideProps } from 'next'
import React, { useContext } from 'react'

import { AuthContext } from '../../contexts/AuthContext'
import withAuthentication from '../../hocs/with-authentication'
import DashboardTemplate from '../../templates/DashboardTemplate'

// import { Container } from './styles';

const DashHome: React.FC = () => {
  const { user } = useContext(AuthContext)

  return (
    <DashboardTemplate title="Home" loading>
      <h3>Olá, {user?.name?.split(' ').slice(0, 1).join(' ')}!</h3>
      <p className="text-muted">Bem-vindo(a) de volta.</p>
    </DashboardTemplate>
  )
}

export default DashHome

export const getServerSideProps: GetServerSideProps = withAuthentication
