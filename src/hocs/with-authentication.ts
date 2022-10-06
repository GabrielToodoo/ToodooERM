import { parseCookies } from 'nookies'
import { getAPIClient } from '../services/axios'

export default async function withAuthentication(ctx: any) {
  const apiClient = getAPIClient(ctx)
  const { ['ToodooERM@Token']: encodedUser } = parseCookies(ctx)

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
