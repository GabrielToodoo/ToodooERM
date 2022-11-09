import React, { useContext, useState } from 'react'
import { isAfter } from 'date-fns'
import { useForm } from 'react-hook-form'

import { ModalContext } from '../../contexts/ModalContext'
import { AuthContext } from '../../contexts/AuthContext'

import Button from '../Button'

import DatePicker from '../DatePicker'

import { ModalWrapper, ActionsWrapper } from './styles'

import { VacationRequestModel } from '../../services/types/dash'
import { submitVacation } from '../../services/dash'

import Modal from '../Modal'
import theme from '../../styles/theme'

const VacationModal: React.FC = () => {
  const { register, handleSubmit } = useForm<VacationRequestModel>()

  const { handleClose, callModal, setCloseable } = useContext(ModalContext)
  const { user } = useContext(AuthContext)

  const [loading, setLoading] = useState(false)

  const [startDate, setStartDate] = useState<Date | undefined>(undefined)
  const [endDate, setEndDate] = useState<Date | undefined>(undefined)

  async function handleVacation(data: VacationRequestModel) {
    setLoading(true)

    if (user.id) {
      const responseCode = await submitVacation(user.id, data)

      if (responseCode == 200) {
        setCloseable(true)
        callModal(
          <Modal
            title="Férias solicitadas com sucesso"
            color={theme.colors.primary400}
            description="Sua solicitação de férias está pendente para análise, acompanhe no dashboard até sua solicitação ser aprovada."
            image="/icons/success-icon.svg"
          />
        )
      } else {
        callModal(
          <Modal
            title="Ocorreu um erro"
            color={theme.colors.colorError}
            description="Não foi possivel solicitar férias no momento, tente novamente mais tarde."
            image="/icons/error-icon.svg"
          />
        )
      }

      setLoading(false)
    }
  }

  return (
    <ModalWrapper>
      <h5>Solicitar férias</h5>
      <form onSubmit={handleSubmit(handleVacation)}>
        <DatePicker
          label="Data de início*"
          placeholder="ex: 07/10/2020"
          registerFunction={register('dateStart', {
            onChange: e => {
              setStartDate(new Date(e.target.value))
            }
          })}
        />
        <DatePicker
          label="Data de retorno*"
          placeholder="ex: 07/10/2020"
          registerFunction={register('dateEnd', {
            onChange: e => {
              setEndDate(new Date(e.target.value))
            }
          })}
        />
        <ActionsWrapper>
          <Button
            ghost
            onClick={e => {
              e.preventDefault()
              handleClose()
            }}
          >
            Cancelar
          </Button>
          <Button
            loading={loading}
            disabled={
              startDate && endDate ? !isAfter(endDate, startDate) : true
            }
          >
            Solicitar
          </Button>
        </ActionsWrapper>
      </form>
    </ModalWrapper>
  )
}

export default VacationModal
