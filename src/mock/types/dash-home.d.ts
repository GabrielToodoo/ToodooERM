export interface NewsLetter {
  title: string
  picture: string
  department: 'Recursos Humanos' | 'Financeiro'
  createdAt: string
}

export interface BirthDay {
  name: string
  date: string
  picture: string
}

export interface ScheduledVacation {
  startAt: string
  endsAt: string
}
