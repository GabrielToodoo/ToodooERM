import { AxiosError } from 'axios'
import { IAuthenticatedUser } from '../contexts/AuthContext'
import { getAPIClient } from './axios'

import { api } from './api'

export interface SignInRequestData {
  email: string
  password: string
  remember: boolean
}

export interface SignInResponseData {
  success: boolean
  user?: IAuthenticatedUser
}

export interface RecoverPasswordRequestData {
  email: string
}

export interface ConfirmRecoverPasswordRequest {
  token: string | string[] | undefined
  password: string
  confirmPassword: string
}

export interface ConfirmRecoverPasswordResponseData {
  success: boolean
  error?: string
}

export async function signInRequest(
  requestData: SignInRequestData
): Promise<SignInResponseData> {
  try {
    const { data, status } = await getAPIClient().post('/Account/login', {
      email: requestData.email,
      password: requestData.password
    })

    if (status === 200) {
      api.defaults.headers['Authorization'] = `Bearer ${data.token}`

      const {
        data: { picture, corporateEmail }
      } = await api.get(`/Employee/${data.id}`)

      return {
        success: true,
        user: {
          picture:
            'https://toodoostorage.blob.core.windows.net/erm/pictures/6183f0e4956431c03d5a182e.png', // change this
          email: corporateEmail,
          ...data
        }
      }
    }
  } catch (err) {
    console.log(err)
    return { success: false }
  }
  return { success: false }
}

export async function requestRecoverPassword(
  requestData: RecoverPasswordRequestData
): Promise<boolean> {
  try {
    const { status } = await getAPIClient().post('/Account/forgotpassword', {
      email: requestData.email
    })

    return status === 200
  } catch (err) {
    console.log(err)
    return false
  }
}

export async function confirmResetPassword(
  requestData: ConfirmRecoverPasswordRequest
): Promise<ConfirmRecoverPasswordResponseData> {
  try {
    console.log(requestData)
    const { status } = await getAPIClient().post(
      '/Account/forgotpassword',
      requestData
    )

    if (status == 200) {
      return { success: true }
    }

    return { success: false, error: 'Ocorreu um erro inesperado.' }
  } catch (err) {
    return {
      success: false,
      error:
        'O token de reset de senha expirou ou não é válido, por favor solicite uma nova troca de senha'
    }
  }
}
