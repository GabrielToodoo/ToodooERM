interface NewsLetter {
  title: string
  picture: string
  department: 'Recursos Humanos' | 'Financeiro'
  sentAt: string
}

export const newLetter: NewsLetter[] = [
  {
    title: 'Aline Santesso requisitou 15 dias de férias.',
    picture:
      'https://super.abril.com.br/wp-content/uploads/2018/05/filhotes-de-cachorro-alcanc3a7am-o-c3a1pice-de-fofura-com-8-semanas1.png?w=1024',
    department: 'Recursos Humanos',
    sentAt: 'há 1 semana'
  }
]

interface BirthDay {
  name: string
  date: string
  picture: string
}

export const nextBirthdays: BirthDay[] = []

interface ScheduledVacation {
  startAt: string
  endsAt: string
}

export const scheduledVacation: ScheduledVacation = {
  startAt: '15 jul. 2021',
  endsAt: '30 jul. 2021'
}
