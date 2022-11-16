import { format } from 'date-fns'

import ptBR from 'date-fns/locale/pt-BR'

export const formatDate = (date: string, formato: string) => {
  const dt = new Date(date)
  const dtDateOnly = new Date(dt.valueOf() + dt.getTimezoneOffset() * 60 * 1000)
  return format(dtDateOnly, formato, {
    locale: ptBR
  })
}
