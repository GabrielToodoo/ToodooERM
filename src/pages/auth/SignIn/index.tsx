import React from 'react'

import Head from 'next/head'

import {
  Container,
  Background,
  FormLogin,
  FormContainer,
  Description,
  HelpText
} from './styles'

import type { NextPage } from 'next'
import Input from '../../../components/Input'
import Button from '../../../components/Button'

const SignIn: NextPage = () => {
  return (
    <>
      <Head>
        <title>Toodoo ERM - Login</title>
      </Head>

      <main>
        <Container>
          <Background className="d-none d-lg-flex">
            <img
              src="/images/login-illustration.svg"
              alt="Login Illustration"
              width="483"
              height="532"
            />
            <Description>
              <h3>Gerencie sua empresa em uma única plataforma</h3>
              <p>Conheça o Toodoo ERM.</p>
            </Description>
          </Background>
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
              <form>
                <p>Seja bem-vindo!</p>
                <h2 className="mb-4">Faça login na sua conta</h2>
                <Input
                  label="Email*"
                  name="email"
                  type="email"
                  placeholder="ex. johndoe@toodoo.com.br"
                  className="mb-3"
                />
                <Input
                  label="Senha*"
                  name="senha"
                  type="password"
                  placeholder="ex. johndoe@toodoo.com.br"
                  className="mb-3"
                />

                <div className="d-flex align-items-center mt-4 mb-4 justify-content-between">
                  <div className="form-group form-check">
                    <input
                      name="remember"
                      type="checkbox"
                      id="remember"
                      className={`form-check-input rounded-circle`}
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

                <Button disabled>Entrar</Button>
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
