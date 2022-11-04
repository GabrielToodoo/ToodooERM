import React, { createContext, useEffect, useState, useContext } from 'react'
import { signInRequest, SignInRequestData } from '../services/auth'
import { setCookie, parseCookies, destroyCookie } from 'nookies'
import Router from 'next/router'
import { api } from '../services/api'
import { GlobalLoadingContext } from './GlobalLoadingContext'

type Props = { children: React.ReactNode }

export type IAuthenticatedUser = {
  id: string
  name: string
  token: string
  picture: string
  email: string
  profile: 'Administrator' | 'Employee'
}

type IAuthContextValues = {
  user: IAuthenticatedUser
  signIn: (data: SignInRequestData) => Promise<boolean>
  logOut: () => void
}

export const AuthContext = createContext({} as IAuthContextValues)

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const { setLoading } = useContext(GlobalLoadingContext)

  const [user, setUser] = useState<IAuthenticatedUser>({} as IAuthenticatedUser)

  async function logOut() {
    setLoading(true)
    setUser({} as IAuthenticatedUser)
    destroyCookie(null, 'ToodooERM@Token')
    destroyCookie(null, 'ToodooERM@Credentials')
    await Router.push('/')
  }

  async function signIn(data: SignInRequestData) {
    const { success, user } = await signInRequest(data)

    if (success && user) {
      console.log(user)
      setCookie(undefined, 'ToodooERM@Token', JSON.stringify(user), {
        maxAge: data.remember ? 1000 * 24 * 60 * 60 : 60 * 60 * 2 // 2 hours
      })

      if (data.remember) {
        setCookie(undefined, 'ToodooERM@Credentials', JSON.stringify(data))
      }

      setUser(user)

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
    <AuthContext.Provider value={{ user, signIn, logOut }}>
      {children}
    </AuthContext.Provider>
  )
}
