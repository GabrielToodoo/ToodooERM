import React, { useContext, useRef, useState } from 'react'

import { useForm } from 'react-hook-form'

import validator from 'validator'

import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'

import {
  Container,
  FormLogin,
  FormContainer,
  HelpText
} from '././../styles/pages/login'
import AuthBackground from '../components/AuthBackground'
import Button from '../components/Button'
import Input from '../components/Input'
import withNonAuthentication from '../hocs/with-non-authentication'

import { AuthContext } from '../contexts/AuthContext'
import { ModalContext } from '../contexts/ModalContext'
import ErrorModal from '../components/Modal'
import Link from 'next/link'
import theme from '../styles/theme'

interface IFormData {
  email: string
  password: string
  remember: boolean
}

const SignIn: NextPage = () => {
  const [email, setEmail] = useState('')

  const [password, setPassword] = useState('')

  const [loading, setLoading] = useState(false)

  const { register, handleSubmit } = useForm<IFormData>()

  const { signIn } = useContext(AuthContext)

  const { callModal } = useContext(ModalContext)

  async function handleLogin(data: IFormData) {
    if (loading) return
    setLoading(true)

    const response = await signIn(data)

    if (!response) {
      callModal(
        <ErrorModal
          title="Erro na autenticação"
          color={theme.colors.colorError}
          description="Verifique o usuário e a senha e tente novamente."
          image="/icons/error-icon.svg"
        />
      )
      setLoading(false)
    }
  }

  return (
    <>
      <Head>
        <title>Toodoo ERM - Login</title>
      </Head>

      <main>
        <Container>
          <AuthBackground
            description={{
              title: 'Gerencie sua empresa em uma única plataforma',
              subtitle: 'Conheça o Toodoo ERM.'
            }}
            image={
              <img
                src="/images/login-illustration.svg"
                alt="Login Illustration"
                width="483"
                height="532"
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
                <p>Seja bem-vindo!</p>
                <h2 className="mb-4">Faça login na sua conta</h2>
                <Input
                  label="Email*"
                  type="email"
                  placeholder="ex. johndoe@toodoo.com.br"
                  className="mb-3"
                  error={email.length > 0 && !validator.isEmail(email)}
                  success={email.length > 0 && validator.isEmail(email)}
                  registerFunction={register('email', {
                    onChange: e => {
                      setEmail(e.target.value)
                    }
                  })}
                />
                <Input
                  label="Senha*"
                  type="password"
                  placeholder="ao menos 8 caracteres"
                  className="mb-3"
                  error={password.length > 0 && password.length < 8}
                  success={password.length >= 8}
                  hiddenable
                  registerFunction={register('password', {
                    onChange: e => {
                      setPassword(e.target.value)
                    }
                  })}
                />

                <div className="d-flex align-items-center mt-4 mb-4 justify-content-between">
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      id="remember"
                      className={`form-check-input rounded-circle`}
                      {...register('remember')}
                    />
                    <label
                      htmlFor="remember"
                      className="text-muted form-check-label"
                    >
                      Lembrar
                    </label>
                  </div>
                  <Link href="/reset">
                    <a className="text-muted">Esqueceu a senha?</a>
                  </Link>
                </div>

                <Button
                  type="submit"
                  loading={loading}
                  disabled={password.length < 8 || !validator.isEmail(email)}
                >
                  Entrar
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

export default SignIn

export const getServerSideProps: GetServerSideProps = withNonAuthentication
