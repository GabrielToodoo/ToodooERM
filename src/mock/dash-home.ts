export interface NewsLetter {
  title: string
  picture: string
  department: 'Recursos Humanos' | 'Financeiro'
  createdAt: string
}

export const newLetter: NewsLetter[] = [
  {
    title: 'Aline Santesso requisitou 15 dias de férias.',
    picture:
      'https://super.abril.com.br/wp-content/uploads/2018/05/filhotes-de-cachorro-alcanc3a7am-o-c3a1pice-de-fofura-com-8-semanas1.png?w=1024',
    department: 'Recursos Humanos',
    createdAt: '2022-10-12T04:01:28.000Z'
  },
  {
    title: 'Gabriel Júnior requisitou uma atualização de dados pessoais.',
    picture: '/images/toodoo-avatar.png',
    department: 'Recursos Humanos',
    createdAt: '2022-10-12T04:01:28.000Z'
  },
  {
    title: 'Toodoo convida para mais uma edição do Bahia’s Coffee.',
    picture: '/images/toodoo-avatar.png',
    department: 'Recursos Humanos',
    createdAt: '2022-10-12T04:01:28.000Z'
  },
  {
    title: 'Brace yourselves, dia 5 chegou, confira a lista de pagamentos.',
    picture: '/images/toodoo-avatar.png',
    department: 'Financeiro',
    createdAt: '2022-10-12T04:01:28.000Z'
  }
]

export interface BirthDay {
  name: string
  date: string
  picture: string
}

export const nextBirthdays: BirthDay[] = [
  {
    name: 'Flávio Teste',
    date: '01 de julho',
    picture: 'https://i.imgur.com/mrGqL0S.png'
  },
  {
    name: 'Flávio Teste',
    date: '01 de julho',
    picture: 'https://i.imgur.com/mrGqL0S.png'
  },
  {
    name: 'Flávio Teste',
    date: '01 de julho',
    picture: 'https://i.imgur.com/mrGqL0S.png'
  },
  {
    name: 'Flávio Teste',
    date: '01 de julho',
    picture: 'https://i.imgur.com/mrGqL0S.png'
  },
  {
    name: 'Flávio Teste',
    date: '01 de julho',
    picture: 'https://i.imgur.com/mrGqL0S.png'
  },
  {
    name: 'Flávio Teste',
    date: '01 de julho',
    picture: 'https://i.imgur.com/mrGqL0S.png'
  },
  {
    name: 'Flávio Teste',
    date: '01 de julho',
    picture: 'https://i.imgur.com/mrGqL0S.png'
  }
]

export interface ScheduledVacation {
  startAt: string
  endsAt: string
}

export const scheduledVacation: ScheduledVacation = {
  startAt: '15 jul. 2021',
  endsAt: '30 jul. 2021'
}
