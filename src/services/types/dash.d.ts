export interface TeamMember {
  name: string
  picture: string
}

export interface TeamData {
  collaborator: TeamMember
  position: string
  city: string
  squad: string
}

export interface Team {
  teamId: string
  name?: string
}

export interface Address {
  city: string
}

export interface SalaryHistory {
  salary: number
  date: string
  percentage: number
}

export interface Vacation {
  dateStart: string
  dateEnd: string
  status: string
}

export interface Benefit {
  valueBenefit: number
  typeBenefit: 'VR' | 'VA' | 'VT'
}

export interface EmployeeInfo {
  name: string
  picture: string
  coverImage: string
  jobTitle: string
  jobLevel: string
  linkedIn: string
  facebook: string
  instagram: string
  birthday: string
  address: Address
  salaryHistories: SalaryHistory[]
  vacations: Vacation[]
  benefits: Benefit[]
  teams: Team[]
  createdAt: string
}

export interface EmployeeUser {
  name: string
  picture: string
  jobTitle: string
  city: string
  isLeader: boolean
}

export interface VacationRequestModel {
  dateStart: Date
  dateEnd: Date
}

export interface UpdatePasswordRequestModel {
  password: string
  newPassword: string
  confirmNewPassword: string
}
