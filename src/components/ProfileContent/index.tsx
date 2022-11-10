import React, { useMemo, useState } from 'react'
import Button from '../Button'
import ProfileInfoPessoalSection from '../ProfileInfoPessoalSection'

import {
  ProfileContentWrapper,
  OptionsContainer,
  ProfileContentHeader,
  ProfileContentSectionWrapper
} from './styles'

interface ISection {
  title: string
  component: JSX.Element
}

const ProfileContent: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<ISection>({
    title: 'Info pessoal',
    component: <ProfileInfoPessoalSection />
  })

  const profileSections = useMemo(
    () => [
      {
        title: 'Info pessoal',
        component: <ProfileInfoPessoalSection />
      },
      {
        title: 'Profissional',
        component: <ProfileInfoPessoalSection />
      },
      {
        title: 'Geral',
        component: <ProfileInfoPessoalSection />
      },
      {
        title: 'Senha',
        component: <ProfileInfoPessoalSection />
      }
    ],
    []
  )

  function renderNewProfileSection(
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) {
    const target = event.target as HTMLTextAreaElement
    const { id } = target

    const newSection = profileSections.find(section => section.title === id)

    if (newSection) {
      setSelectedSection(newSection)
    }
  }

  return (
    <ProfileContentWrapper>
      <ProfileContentHeader>
        <OptionsContainer>
          {profileSections.map(section => {
            return (
              <li
                className={
                  selectedSection.title === section.title ? 'active' : ''
                }
                id={section.title}
                onClick={renderNewProfileSection}
              >
                {section.title}
              </li>
            )
          })}
        </OptionsContainer>
        <Button disabled>Salvar</Button>
      </ProfileContentHeader>
      <ProfileContentSectionWrapper>
        {selectedSection.component}
      </ProfileContentSectionWrapper>
    </ProfileContentWrapper>
  )
}

export default ProfileContent
