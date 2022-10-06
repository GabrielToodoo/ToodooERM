import axios from 'axios'

import { parseCookies } from 'nookies'

export function getAPIClient(ctx?: any) {
  const { 'ToodooERM@Token': encodedUser } = parseCookies(ctx)

  const api = axios.create({
    baseURL: 'https://erm-api.azurewebsites.net'
  })

  if (encodedUser) {
    const { token } = JSON.parse(encodedUser)
    api.defaults.headers['Authorization'] = `Bearer ${token}`
  }

  return api
}
