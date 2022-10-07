import { IAuthenticatedUser } from '../contexts/AuthContext'
import { getAPIClient } from './axios'

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

export async function signInRequest(
  requestData: SignInRequestData
): Promise<SignInResponseData> {
  try {
    const { data, status } = await getAPIClient().post('/Account/login', {
      email: requestData.email,
      password: requestData.password
    })

    if (status === 200) {
      return { success: true, user: data }
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
