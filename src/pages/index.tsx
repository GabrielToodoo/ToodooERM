import React, { useState } from 'react'

import { useForm } from 'react-hook-form'

import type { NextPage } from 'next'
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

interface IFormData {
  email: string
  password: string
  remember: boolean
}

const SignIn: NextPage = () => {
  const [loading, setLoading] = useState(false)

  const { register, handleSubmit } = useForm()

  function handleLogin(data: IFormData) {
    console.log(data)
    setLoading(true)
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
                  registerFunction={register('email')}
                />
                <Input
                  label="Senha*"
                  type="password"
                  placeholder="ao menos 8 caracteres"
                  className="mb-3"
                  registerFunction={register('password')}
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
                  <a className="text-muted" href="#">
                    Esqueceu a senha?
                  </a>
                </div>

                <Button onClick={handleLogin} loading={loading}>
                  Entrar
                </Button>
              </form>
              <HelpText>
                Precisa de ajuda? <a href="#">Entre em contato.</a>
              </HelpText>
            </FormContainer>
          </FormLogin>
        </Container>
      </main>
    </>
  )
}

export default SignIn

// export const getServerSideProps: GetServerSideProps = withAuthentication  TODO: forceAuthRedirect (Redirect user if he is already logged in)
