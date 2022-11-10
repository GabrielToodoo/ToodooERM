import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { ModalContext } from '../../contexts/ModalContext'
import Button from '../Button'
import FileInput from '../FileInput'

import Input from '../Input'
import Select from '../Select'
import TextArea from '../TextArea'

import { ActionsWrapper, Container } from './styles'

interface IFormData {
  category: string
  title: string
  description: string
  file: any
}

const HelpdeskModal: React.FC = () => {
  const { register, handleSubmit } = useForm<IFormData>()

  const { handleClose } = useContext(ModalContext)

  return (
    <Container>
      <h5>Novo chamado</h5>
      <form>
        <Select
          id="category"
          label="Categoria"
          options={['Recursos Humanos', 'Financeiro', 'Desenvolvimento & TI']}
          className="mb-4"
        />
        <Input
          label="Título*"
          type="text"
          placeholder="digite aqui um título para o chamado"
          className="mb-4 w-100"
          labelStyle={{ width: '100%' }}
          registerFunction={register('title')}
        />
        <TextArea
          id="description"
          label="Descrição*"
          style={{ resize: 'none' }}
          contentEditable
          className="mb-3 w-100"
          placeholder="digite uma descrição para seu chamado aqui."
        />
        <FileInput label="Anexar (opcional)" id="file" />
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
            onClick={e => {
              e.preventDefault()
            }}
          >
            Enviar
          </Button>
        </ActionsWrapper>
      </form>
    </Container>
  )
}

export default HelpdeskModal
