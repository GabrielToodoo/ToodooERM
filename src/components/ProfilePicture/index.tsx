import React, { useContext, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'

import { ModalContext } from '../../contexts/ModalContext'
import { AuthContext } from '../../contexts/AuthContext'

import Button from '../Button'

import { ModalWrapper, ActionsWrapper, ProfilePictureBox } from './styles'

import { VacationRequestModel } from '../../services/types/dash'

import theme from '../../styles/theme'

interface IProfilePicture {
  pictureSrc: string
}

const ProfilePictureModal: React.FC<IProfilePicture> = ({ pictureSrc }) => {
  const { register, handleSubmit } = useForm<VacationRequestModel>()

  const { handleClose, callModal, setCloseable } = useContext(ModalContext)
  const { user } = useContext(AuthContext)

  const [loading, setLoading] = useState(false)

  const inputRef = useRef<HTMLInputElement>()

  const focusInput = () => {
    inputRef?.current?.click()
  }

  async function handlePictureChange(data: VacationRequestModel) {
    setLoading(true)
  }

  return (
    <ModalWrapper>
      <form onSubmit={handleSubmit(handlePictureChange)}>
        <input className="d-none" id="fileUpload" type="file" ref={inputRef} />
        <ProfilePictureBox source={pictureSrc} />
        <ActionsWrapper>
          <Button ghost onClick={handleClose}>
            Cancelar
          </Button>
          <Button loading={loading}>Salvar</Button>
        </ActionsWrapper>
      </form>
    </ModalWrapper>
  )
}

export default ProfilePictureModal
