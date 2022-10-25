import * as home from '../mock/dash-home'

import * as organogram from '../mock/dash-organogram'

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
