import React from 'react'

import Head from 'next/head'

import { GetServerSideProps, NextPage } from 'next'

import Lottie from 'react-lottie'

import withAuthentication from '../hocs/with-authentication'

import LayoutSidebar from '../components/LayoutSidebar'

import { DashboardContainer } from './styles'

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
      <div className="row overflow-hidden">
        <div className="col-md-2 p-0">
          <LayoutSidebar activeRoute={activeRoute} />
        </div>
        <DashboardContainer className="col-md-10" loading>
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
      </div>
    </>
  )
}

export default DashboardTemplate
