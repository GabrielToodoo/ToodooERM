import { parseCookies, setCookie } from 'nookies'
import { signInRequest } from '../services/auth'
import { getAPIClient } from '../services/axios'

export default async function withAuthentication(ctx: any) {
  const apiClient = getAPIClient(ctx)
  const {
    ['ToodooERM@Token']: encodedUser,
    ['ToodooERM@Credentials']: rememberCredentials
  } = parseCookies(ctx)

  if (!encodedUser) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  try {
    const { status } = await apiClient.get('/Employee')

    if (status !== 200) {
      if (rememberCredentials) {
        const { success, user } = await signInRequest(
          JSON.parse(rememberCredentials)
        )

        if (success && user) {
          setCookie(undefined, 'ToodooERM@Token', JSON.stringify(user), {
            maxAge: 1000 * 24 * 60 * 60
          })

          apiClient.defaults.headers['Authorization'] = `Bearer ${user.token}`

          return {
            props: {}
          }
        }
      }

      return {
        redirect: {
          destination: '/',
          permanent: false
        }
      }
    }
  } catch (err) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}
