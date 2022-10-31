import * as home from '../mock/dash-home'

import * as organogram from '../mock/dash-organogram'
import { getAPIClient } from './axios'

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

interface Team {
  teamId: string
  name?: string
}

interface Address {
  city: string
}

interface EmployeeInfo {
  name: string
  picture: string
  jobTitle: string
  jobLevel: string
  address: Address
  teams: Team[]
}

interface EmployeeUser {
  name: string
  picture: string
  jobTitle: string
  city: string
  isLeader: boolean
}

export async function getDashboardNews(): Promise<home.NewsLetter[]> {
  // TODO: Make the real function without mock
  return new Promise(resolve => setTimeout(resolve, 1000, home.newLetter))
}

export async function getDashboardBirthdays(): Promise<home.BirthDay[]> {
  // TODO: Make the real function without mock
  return new Promise(resolve => setTimeout(resolve, 1000, home.nextBirthdays))
}

export async function getScheduledVacation(): Promise<home.ScheduledVacation> {
  // TODO: Make the real function without mock
  return new Promise(resolve =>
    setTimeout(resolve, 1000, home.scheduledVacation)
  )
}

/* ORGANOGRAM PROMISES */

export async function getMyTeamOrganogram(): Promise<organogram.OrganogramNode> {
  // TODO: Make the real function without mock
  return new Promise(resolve =>
    setTimeout(resolve, 1000, organogram.organogramMyTeam)
  )
}

export async function getGeneralOrganogram(): Promise<organogram.OrganogramNode> {
  // TODO: Make the real function without mock
  return new Promise(resolve =>
    setTimeout(resolve, 1000, organogram.organogramGeneral)
  )
}

/* TEAM PAGE PROMISES */

export async function getTeamMembers(): Promise<TeamData[]> {
  try {
    const { data, status }: { data: EmployeeInfo[]; status: number } =
      await getAPIClient().get(`/Employee`)

    if (status != 200) {
      return []
    }
    console.log(data)

    return data.map(employee => {
      return {
        collaborator: {
          name: employee.name,
          picture: employee?.picture ?? '/images/no-photo.png'
        },
        position: `${employee.jobTitle} ${employee.jobLevel}`,
        city: employee.address.city,
        squad: employee.teams?.[0]?.name ?? 'Toodoo Team'
      }
    })
  } catch (err) {
    console.log(err)
    return []
  }
}
