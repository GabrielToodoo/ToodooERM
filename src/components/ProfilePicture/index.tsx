import React, { useContext, useState } from 'react'
import { isAfter } from 'date-fns'
import { useForm } from 'react-hook-form'

import { ModalContext } from '../../contexts/ModalContext'
import { AuthContext } from '../../contexts/AuthContext'

import Button from '../Button'

import { ModalWrapper, ActionsWrapper } from './styles'

import { VacationRequestModel } from '../../services/types/dash'

import Modal from '../Modal'
import theme from '../../styles/theme'

const ProfilePictureModal: React.FC = () => {
  const { register, handleSubmit } = useForm<VacationRequestModel>()

  const { handleClose, callModal, setCloseable } = useContext(ModalContext)
  const { user } = useContext(AuthContext)

  const [loading, setLoading] = useState(false)

  async function handlePictureChange(data: VacationRequestModel) {
    setLoading(true)
  }

  return (
    <ModalWrapper>
      <form onSubmit={handleSubmit(handlePictureChange)}>
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
