import React, { useContext, useState } from 'react'

import { useForm } from 'react-hook-form'

import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'

import {
  Container,
  FormLogin,
  FormContainer,
  HelpText
} from './../../styles/pages/login'
import AuthBackground from '../../components/AuthBackground'
import Button from '../../components/Button'
import Input from '../../components/Input'
import withNonAuthentication from '../../hocs/with-non-authentication'

import { ModalContext } from '../../contexts/ModalContext'
import Modal from '../../components/Modal'
import Link from 'next/link'
import { confirmResetPassword } from '../../services/auth'
import theme from '../../styles/theme'
import { useRouter } from 'next/router'

interface IFormData {
  password: string
  newPassword: string
}

const ConfirmPassword: NextPage = () => {
  const { query } = useRouter()

  const [password, setPassword] = useState('')

  const [newPassword, setNewPassword] = useState('')

  const [loading, setLoading] = useState(false)

  const { register, handleSubmit } = useForm<IFormData>()

  const { callModal } = useContext(ModalContext)

  async function handleLogin(data: IFormData) {
    if (loading) return

    const { password, newPassword } = data

    if (password !== newPassword) {
      callModal(
        <Modal
          title="Ocorreu um erro"
          color={theme.colors.colorError}
          description="As senhas precisam ser iguais."
          image="/icons/error-icon.svg"
        />
      )
      return
    }

    setLoading(true)

    const { success, error } = await confirmResetPassword({
      token: query.token,
      password,
      confirmPassword: newPassword
    })

    if (success) {
      callModal(
        <Modal
          title="A senha foi alterada"
          color={theme.colors.primary400}
          description="Faça novo login para continuar."
          image="/icons/success-icon.svg"
        />
      )
    } else {
      callModal(
        <Modal
          title="Ocorreu um erro"
          color={theme.colors.colorError}
          description={error ? error : 'Ocorreu um erro inesperado.'}
          image="/icons/error-icon.svg"
        />
      )
    }

    setLoading(false)
  }

  return (
    <>
      <Head>
        <title>Toodoo ERM - Login</title>
      </Head>

      <main>
        <Container>
          <AuthBackground
            image={
              <img
                src="/images/recover-password-illustration.svg"
                alt="Recover Password Illustration"
                width="707"
                height="798"
              />
            }
          />
          <FormLogin>
            <FormContainer className="mx-lg-100">
              <div className="w-100">
                <img
                  src="/images/logo_toodoo.svg"
                  width="77"
                  height="16"
                  alt="Toodoo Logo"
                />
              </div>
              <form onSubmit={handleSubmit(handleLogin)}>
                <Link href="/">
                  <a className="d-flex align-items-center justify-center gap-2">
                    <img
                      src="/icons/arrow-left.svg"
                      alt="Arrow Left Back Image"
                      width="15"
                      height="15"
                    />
                    Voltar à pagina de login
                  </a>
                </Link>
                <h2 className="mb-4 mt-3">Confirme sua nova senha</h2>

                <Input
                  label="Nova senha"
                  type="password"
                  placeholder="ao menos 8 caracteres"
                  className="mb-4"
                  hiddenable
                  error={password.length > 0 && password.length < 8}
                  success={password.length >= 8}
                  registerFunction={register('password', {
                    onChange: e => {
                      setPassword(e.target.value)
                    }
                  })}
                />

                <Input
                  label="Confirmar senha"
                  type="password"
                  placeholder="ao menos 8 caracteres"
                  className="mb-3"
                  hiddenable
                  error={newPassword.length > 0 && newPassword.length < 8}
                  success={newPassword.length >= 8}
                  registerFunction={register('newPassword', {
                    onChange: e => {
                      setNewPassword(e.target.value)
                    }
                  })}
                />

                <p className="text-light-muted mb-4">
                  Dica: Sua senha deve ter, ao menos, 8 caracteres. Para
                  torná-la ainda mais forte, você deve usar caracteres
                  maiúsculos e minúsculos, números e símbolos, como: #$@%!&*.
                </p>

                <Button
                  type="submit"
                  loading={loading}
                  disabled={password.length < 8 || newPassword.length < 8}
                >
                  Enviar
                </Button>
              </form>
              <HelpText>
                Precisa de ajuda? <Link href="#">Entre em contato.</Link>
              </HelpText>
            </FormContainer>
          </FormLogin>
        </Container>
      </main>
    </>
  )
}

export default ConfirmPassword

export const getServerSideProps: GetServerSideProps = withNonAuthentication
