import React, { useContext, useRef, useState } from 'react'

import { ModalContext } from '../../contexts/ModalContext'
import { AuthContext } from '../../contexts/AuthContext'

import Button from '../Button'

import {
  ModalWrapper,
  ActionsWrapper,
  ProfilePictureBox,
  ContentWrapper
} from './styles'

import Modal from '../Modal'
import theme from '../../styles/theme'

interface IProfilePicture {
  pictureSrc: string
}

const ProfilePictureModal: React.FC<IProfilePicture> = ({ pictureSrc }) => {
  const { handleClose, callModal, setCloseable } = useContext(ModalContext)
  const { changePicture } = useContext(AuthContext)

  const [picture, setPicture] = useState(pictureSrc)
  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(true)

  const inputRef = useRef<HTMLInputElement>()

  const focusInput = () => {
    inputRef?.current?.click()
  }

  async function handlePictureChange() {
    setLoading(true)
    changePicture(picture)
    callModal(
      <Modal
        title="Foto de perfil atualizada"
        color={theme.colors.primary400}
        description="Sua foto de perfil foi atualizada com sucesso."
        image="/icons/success-icon.svg"
      />
    )
  }

  function handleFileUploadImageChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    if (!event.target.files || event.target.files.length === 0) {
      console.error('Select a file')
      return
    }

    setDisabled(false)
    const reader = new FileReader()
    reader.addEventListener('loadend', () => {
      setPicture(reader.result as string)
    })

    reader.readAsDataURL(event.target.files[0])
  }

  return (
    <ModalWrapper>
      <ContentWrapper>
        <input
          className="d-none"
          id="fileUpload"
          type="file"
          accept="image/png, image/jpeg"
          onChange={handleFileUploadImageChange}
          ref={inputRef}
        />
        <ProfilePictureBox onClick={focusInput} source={picture} />
      </ContentWrapper>
      <ActionsWrapper>
        <Button ghost onClick={handleClose}>
          Cancelar
        </Button>
        <Button
          loading={loading}
          disabled={disabled}
          onClick={handlePictureChange}
        >
          Salvar
        </Button>
      </ActionsWrapper>
    </ModalWrapper>
  )
}

export default ProfilePictureModal
