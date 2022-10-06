import { IAuthenticatedUser } from '../contexts/AuthContext'

export interface SignInRequestData {
  email: string
  password: string
}

export interface SignInResponseData {
  success: boolean
  user?: IAuthenticatedUser
}

export async function signInRequest(
  data: SignInRequestData
): Promise<SignInResponseData> {
  return { success: false }
}
