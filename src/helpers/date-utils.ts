import { format, parseISO } from 'date-fns'

import ptBR from 'date-fns/locale/pt-BR'

export const formatDate = (date: string, formato: string) => {
  return format(parseISO(date), formato, {
    locale: ptBR
  })
}
