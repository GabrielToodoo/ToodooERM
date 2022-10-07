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
