import * as mock from '../mock/dash-home'

export async function getDashboardNews(): Promise<mock.NewsLetter[]> {
  // TODO: Make the real function without mock
  return new Promise(resolve => setTimeout(resolve, 1000, mock.newLetter))
}

export async function getDashboardBirthdays(): Promise<mock.BirthDay[]> {
  // TODO: Make the real function without mock
  return new Promise(resolve => setTimeout(resolve, 1000, mock.nextBirthdays))
}
