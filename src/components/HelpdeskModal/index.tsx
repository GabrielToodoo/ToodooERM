import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { ModalContext } from '../../contexts/ModalContext'
import Button from '../Button'

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
          placeholder="digite uma descrição para seu chamado aqui."
          defaultText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis nibh et eget dui tortor. Sed quisque lorem dolor erat mattis sodales at nisl, eget. Lacinia dictum molestie gravida diam. Laoreet morbi eu, auctor interdum duis purus viverra. Duis sit nisl, lectus vel, nunc eu neque, tempor elit. Sed tellus enim sed tempor lorem diam. Euismod mi tincidunt sit pulvinar elementum hac proin. Porttitor mauris rhoncus quis a. Leo nisi auctor rutrum tortor donec. Ultrices nec odio ultrices turpis eu sit sed. Justo, varius enim et mauris lobortis eleifend."
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
