import * as types from './types/dash'
import * as homeTypes from '../mock/types/dash-home'
import * as organogramTypes from '../mock/types/dash-organogram'

import * as home from '../mock/dash-home'
import * as organogram from '../mock/dash-organogram'

import { CorpInfo } from '../pages/dashboard/corp'

import { formatDate } from '../helpers/date-utils'
import { getAPIClient } from './axios'

export async function getDashboardNews(): Promise<homeTypes.NewsLetter[]> {
  // TODO: Make the real function without mock
  return new Promise(resolve => setTimeout(resolve, 1000, home.newLetter))
}

export async function getDashboardBirthdays(): Promise<homeTypes.BirthDay[]> {
  try {
    const { data, status }: { data: types.EmployeeInfo[]; status: number } =
      await getAPIClient().get(`/Employee/birthdayOfTheMonth`)
    if (status != 200) {
      return []
    }

    return data.map(data => {
      return {
        name: data.name,
        date: formatDate(data.birthday, "dd 'de' MMM"),
        picture: data?.picture ?? '/images/no-photo.png'
      }
    })
  } catch (err) {
    console.log(err)
  }
  return []
}

export async function getCorpData(employeeId: string): Promise<CorpInfo> {
  try {
    const { data, status }: { data: types.EmployeeInfo; status: number } =
      await getAPIClient().get(`/Employee/${employeeId}`)

    if (status != 200) {
      return {} as CorpInfo
    }

    console.log(data)
    return {
      vacations: data.vacations,
      remuneration: {
        currentSalary: data.salaryHistories[data.salaryHistories.length - 1],
        salaryHistories: data.salaryHistories
      },
      benefits: data.benefits
    }
  } catch (err) {
    console.log(err)
  }
  return {} as CorpInfo
}

export async function getProfileData(
  employeeId: string
): Promise<types.EmployeeInfo> {
  try {
    const { data, status }: { data: types.EmployeeInfo; status: number } =
      await getAPIClient().get(`/Employee/${employeeId}`)

    if (status != 200) {
      return {} as types.EmployeeInfo
    }

    return data
  } catch (err) {
    console.log(err)
  }
  return {} as types.EmployeeInfo
}

export async function getScheduledVacation(): Promise<homeTypes.ScheduledVacation> {
  // TODO: Make the real function without mock
  return new Promise(resolve =>
    setTimeout(resolve, 1000, home.scheduledVacation)
  )
}

/* ORGANOGRAM PROMISES */

export async function getMyTeamOrganogram(): Promise<organogramTypes.OrganogramNode> {
  // TODO: Make the real function without mock
  return new Promise(resolve =>
    setTimeout(resolve, 1000, organogram.organogramMyTeam)
  )
}

export async function getGeneralOrganogram(): Promise<organogramTypes.OrganogramNode> {
  // TODO: Make the real function without mock
  return new Promise(resolve =>
    setTimeout(resolve, 1000, organogram.organogramGeneral)
  )
}

/* TEAM PAGE PROMISES */

export async function getTeamMembers(): Promise<types.TeamData[]> {
  try {
    const { data, status }: { data: types.EmployeeInfo[]; status: number } =
      await getAPIClient().get(`/Employee`)

    if (status != 200) {
      return []
    }

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

/* MODAL SUBMIT VACATION */

export async function submitVacation(
  employeeId: string,
  data: types.VacationRequestModel
): Promise<number> {
  try {
    const { status }: { status: number } = await getAPIClient().post(
      `/Employee/${employeeId}/vacation`,
      data
    )

    return status
  } catch (err) {
    return 400
  }
}
