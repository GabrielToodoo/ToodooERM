import React, { createContext, useMemo, useState } from 'react'
import Button from '../Button'
import ProfileGeneralPessoalSection from '../ProfileGeneralPessoalSection'

import ProfileInfoPessoalSection, {
  onSaveFunction as profileInfoSaveFunction
} from '../ProfileInfoPessoalSection'

import ProfilePasswordPessoalSection, {
  onSaveFunction as profilePasswordSaveFunction
} from '../ProfilePasswordPessoalSection'
import ProfileProfissionalPessoalSection from '../ProfileProfissionalPessoalSection'

import {
  ProfileContentWrapper,
  OptionsContainer,
  ProfileContentHeader,
  ProfileContentSectionWrapper,
  AlertText
} from './styles'

interface ISection {
  title: string
  component: JSX.Element
  onSave: (employeeId: string, formData: any) => Promise<any>
}

interface ProfileEditProps {
  setFormData: any
  setButtonDisabled: any
}

interface IProfileContentProps {
  employeeId: string
}

export const ProfileEditInfoContext = createContext({} as ProfileEditProps)

const ProfileContent: React.FC<IProfileContentProps> = ({ employeeId }) => {
  const [formData, setFormData] = useState<object>()
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true)

  const [selectedSection, setSelectedSection] = useState<ISection>({
    title: 'Info pessoal',
    component: <ProfileInfoPessoalSection />,
    onSave: profileInfoSaveFunction
  })

  const profileSections = useMemo(
    () => [
      {
        title: 'Info pessoal',
        component: <ProfileInfoPessoalSection />,
        onSave: profileInfoSaveFunction
      },
      {
        title: 'Profissional',
        component: <ProfileProfissionalPessoalSection />,
        onSave: profileInfoSaveFunction
      },
      {
        title: 'Geral',
        component: <ProfileGeneralPessoalSection />,
        onSave: profileInfoSaveFunction
      },
      {
        title: 'Senha',
        component: <ProfilePasswordPessoalSection />,
        onSave: profilePasswordSaveFunction
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
        <div className="d-flex align-items-center" style={{ width: '330px' }}>
          <AlertText id="alertText"></AlertText>
          <Button
            onClick={() => {
              selectedSection.onSave(employeeId, formData)
            }}
            disabled={buttonDisabled}
          >
            Salvar
          </Button>
        </div>
      </ProfileContentHeader>
      <ProfileContentSectionWrapper>
        <ProfileEditInfoContext.Provider
          value={{ setFormData, setButtonDisabled }}
        >
          {selectedSection.component}
        </ProfileEditInfoContext.Provider>
      </ProfileContentSectionWrapper>
    </ProfileContentWrapper>
  )
}

export default ProfileContent
