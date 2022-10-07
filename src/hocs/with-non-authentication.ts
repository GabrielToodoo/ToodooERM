import { parseCookies } from 'nookies'
import { getAPIClient } from '../services/axios'

export default async function withNonAuthentication(ctx: any) {
  const apiClient = getAPIClient(ctx)
  const { ['ToodooERM@Token']: encodedUser } = parseCookies(ctx)

  if (encodedUser) {
    try {
      const { status } = await apiClient.get('/Employee')

      if (status === 200) {
        return {
          redirect: {
            destination: '/dashboard',
            permanent: false
          }
        }
      }
    } catch (err) {}
  }

  return {
    props: {}
  }
}
