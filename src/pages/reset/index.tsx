import React, { useContext, useState } from 'react'

import { useForm } from 'react-hook-form'

import validator from 'validator'

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
import { requestRecoverPassword } from '../../services/auth'
import theme from '../../styles/theme'

interface IFormData {
  email: string
}

const ResetPassword: NextPage = () => {
  const [email, setEmail] = useState('')

  const [loading, setLoading] = useState(false)

  const { register, handleSubmit } = useForm<IFormData>()

  const { callModal } = useContext(ModalContext)

  async function handleLogin(data: IFormData) {
    if (loading) return
    setLoading(true)

    const successfully = await requestRecoverPassword(data)

    if (successfully) {
      callModal(
        <Modal
          title="Verifique sua caixa de entrada"
          color={theme.colors.primary400}
          description="Enviamos um email com instruções para redefinir sua senha."
          image="/icons/recover-mail.svg"
        />
      )
    } else {
      callModal(
        <Modal
          title="Ocorreu um erro"
          color={theme.colors.colorError}
          description="Verifique se o seu endereço de e-mail está correto ou tente novamente mais tarde."
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
                <h2 className="mb-4 mt-3">Esqueceu sua senha</h2>
                <p className="text-muted mb-4">
                  Entre abaixo com o seu e-mail para receber o link de
                  confirmação.
                </p>
                <Input
                  label="Email*"
                  type="email"
                  placeholder="ex. johndoe@toodoo.com.br"
                  className="mb-5"
                  error={email.length > 0 && !validator.isEmail(email)}
                  success={email.length > 0 && validator.isEmail(email)}
                  registerFunction={register('email', {
                    onChange: e => {
                      setEmail(e.target.value)
                    }
                  })}
                />

                <Button
                  type="submit"
                  loading={loading}
                  disabled={!validator.isEmail(email)}
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

export default ResetPassword

export const getServerSideProps: GetServerSideProps = withNonAuthentication
