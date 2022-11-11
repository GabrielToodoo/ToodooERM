import React, { ReactElement, useContext, useEffect, useState } from 'react'

import { GetServerSideProps } from 'next'

import { AuthContext } from '../../contexts/AuthContext'

import Dashboard, { useLayout } from '../../templates/Dashboard'

import { NextPageWithLayout } from '../_app'

import withAuthentication from '../../hocs/with-authentication'
import Loading from '../../components/Loading'

import { ProfilePage } from '../../styles/pages/Dashboard/profile'
import ProfileHeader from '../../components/ProfileHeader'
import { getProfileData } from '../../services/dash'
import { EmployeeInfo } from '../../services/types/dash'
import ProfileContent from '../../components/ProfileContent'

const Page: NextPageWithLayout = () => {
  const { isLoading, setLoading } = useLayout()
  const { user } = useContext(AuthContext)

  const [profileInfo, setProfileInfo] = useState<EmployeeInfo>(
    {} as EmployeeInfo
  )

  async function loadDashboard() {
    setLoading(true)
    if (user.id) {
      try {
        const profileInfo = await getProfileData(user.id)

        setProfileInfo(profileInfo)

        setLoading(false)
      } catch (err) {}
    }
  }

  useEffect(() => {
    setLoading(true)
    loadDashboard()
  }, [user])

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <ProfilePage>
          <ProfileHeader
            name={user.name}
            bgPicture={
              profileInfo.coverImage && profileInfo.coverImage.length !== 0
                ? profileInfo.coverImage
                : 'https://i.imgur.com/PwWQFrE.png'
            }
            picture={
              user.picture && user.picture.length !== 0
                ? user.picture
                : '/images/no-photo.png'
            }
            createdAt={profileInfo.createdAt}
            instagramUrl={profileInfo.instagram}
            linkedInUrl={profileInfo.linkedIn}
            facebookUrl={profileInfo.facebook}
            role={`${profileInfo.jobTitle} ${profileInfo.jobLevel}`}
            userId={user.id}
            loadDashboard={loadDashboard}
          />
          <ProfileContent employeeId={user.id} />
        </ProfilePage>
      )}
    </>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Dashboard title="Perfil">{page}</Dashboard>
}

export const getServerSideProps: GetServerSideProps = withAuthentication

export default Page
