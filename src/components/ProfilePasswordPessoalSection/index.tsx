import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../../contexts/AuthContext'
import { submitUpdatePassword } from '../../services/dash'

import Input from '../Input'
import { ProfileEditInfoContext } from '../ProfileContent'

import { Container } from './styles'

interface IChangePasswordFormData {
  password: string
  newPassword: string
  confirmNewPassword: string
}

const ProfilePasswordPessoalSection: React.FC = () => {
  const { register, getValues } = useForm<IChangePasswordFormData>()

  const { setFormData, setButtonDisabled } = useContext(ProfileEditInfoContext)

  const [error, setError] = useState(false)

  function checkPasswords() {
    const { newPassword, confirmNewPassword } = getValues()

    setError(
      newPassword.length > 0 &&
        confirmNewPassword.length > 0 &&
        newPassword !== confirmNewPassword
    )
  }

  function checkStates() {
    const data = getValues()
    const { password, newPassword, confirmNewPassword } = data

    setFormData(data)
    setButtonDisabled(
      !(
        password.length > 0 &&
        newPassword.length > 0 &&
        confirmNewPassword.length > 0 &&
        newPassword === confirmNewPassword
      )
    )
  }

  return (
    <Container>
      <form>
        <Input
          label="Senha atual"
          placeholder="Insira sua senha atual"
          labelStyle={{ width: '100%' }}
          registerFunction={register('password', { onChange: checkStates })}
          type="password"
        />
        <Input
          label="Nova senha"
          placeholder="ao menos 8 caracteres"
          labelStyle={{ width: '100%' }}
          registerFunction={register('newPassword', {
            onBlur: checkPasswords,
            onChange: checkStates
          })}
          type="password"
          errorLabel={error ? 'As senhas precisam ser iguais' : undefined}
        />
        <Input
          label="Repetir nova senha"
          placeholder="ao menos 8 caracteres"
          labelStyle={{ width: '100%' }}
          registerFunction={register('confirmNewPassword', {
            onBlur: checkPasswords,
            onChange: checkStates
          })}
          errorLabel={error ? 'As senhas precisam ser iguais' : undefined}
          type="password"
        />
      </form>
      <p className="password-help">
        Dica: Sua senha deve ter, ao menos, 8 caracteres. Para torná-la ainda
        mais forte, você deve usar caracteres maiúsculos e minúsculos, números e
        símbolos, como: #$@%!&*.
      </p>
    </Container>
  )
}

export async function onSaveFunction(
  employeeId: string,
  data: any
): Promise<void> {
  const response = await submitUpdatePassword(data)
  const alertBox = document.getElementById('alertText')

  if (alertBox) {
    alertBox.textContent = 'Alterações salvas!'
  }
}

export default ProfilePasswordPessoalSection
