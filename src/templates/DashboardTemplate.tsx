import React from 'react'

import Head from 'next/head'

import { GetServerSideProps, NextPage } from 'next'

import Lottie from 'react-lottie'

import withAuthentication from '../hocs/with-authentication'

import LayoutSidebar from '../components/LayoutSidebar'

import { DashboardContainer, Wrapper } from './styles'

import animationData from '../../public/lottie/toodoo-animation.json'

interface IDashboardTemplate {
  title: string
  loading?: boolean
  activeRoute: number
  children: React.ReactNode
}

const DashboardTemplate: NextPage<IDashboardTemplate> = ({
  title,
  loading,
  activeRoute = 0,
  children
}) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <>
      <Head>
        <title>Toodoo ERM - {title}</title>
      </Head>
      <Wrapper>
        <LayoutSidebar activeRoute={activeRoute} />
        <DashboardContainer loading={loading}>
          {loading ? (
            <Lottie
              options={defaultOptions}
              isClickToPauseDisabled={true}
              height={192}
              width={192}
              style={{ cursor: 'default' }}
            />
          ) : (
            children
          )}
        </DashboardContainer>
      </Wrapper>
    </>
  )
}

export default DashboardTemplate
