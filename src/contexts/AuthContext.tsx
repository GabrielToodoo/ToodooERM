import React, { createContext, useEffect, useState } from 'react'
import { signInRequest, SignInRequestData } from '../services/auth'
import { setCookie, parseCookies } from 'nookies'
import Router from 'next/router'
import { api } from '../services/api'

type Props = { children: React.ReactNode }

export type IAuthenticatedUser = {
  id: string
  name: string
  token: string
  profile: 'Administrator' | 'Employee'
}

type IAuthContextValues = {
  user: IAuthenticatedUser
  signIn: (data: SignInRequestData) => Promise<boolean>
}

export const AuthContext = createContext({} as IAuthContextValues)

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<IAuthenticatedUser>({} as IAuthenticatedUser)

  async function signIn(data: SignInRequestData) {
    const { success, user } = await signInRequest(data)

    if (success && user) {
      setCookie(undefined, 'ToodooERM@Token', JSON.stringify(user), {
        maxAge: data.remember ? 1000 * 24 * 60 * 60 : 60 * 60 * 2 // 2 hours
      })

      if (data.remember) {
        setCookie(undefined, 'ToodooERM@Credentials', JSON.stringify(data))
      }

      setUser(user)

      api.defaults.headers['Authorization'] = `Bearer ${user.token}`

      Router.push('/dashboard')

      return true
    }

    return false
  }

  useEffect(() => {
    const { 'ToodooERM@Token': encodedUser } = parseCookies()

    if (encodedUser) {
      const user = JSON.parse(encodedUser)
      setUser(user)
    }
  }, [])

  return (
    <AuthContext.Provider value={{ user, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}
