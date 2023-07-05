import { dataAccess } from '../data'
import UserService from './userService'
import PrisonService from './prisonService'
import SessionTemplateService from './sessionTemplateService'
import LocationGroupService from './locationGroupService'
import CategoryGroupService from './categoryGroupService'
import IncentiveLevelGroupService from './incentiveLevelGroupService'

export const services = () => {
  const { hmppsAuthClient, applicationInfo, prisonRegisterApiClientBuilder, visitSchedulerApiClientBuilder } =
    dataAccess()

  const categoryGroupService = new CategoryGroupService(visitSchedulerApiClientBuilder, hmppsAuthClient)

  const incentiveLevelGroupService = new IncentiveLevelGroupService(visitSchedulerApiClientBuilder, hmppsAuthClient)

  const locationGroupService = new LocationGroupService(visitSchedulerApiClientBuilder, hmppsAuthClient)

  const prisonService = new PrisonService(
    visitSchedulerApiClientBuilder,
    prisonRegisterApiClientBuilder,
    hmppsAuthClient,
  )

  const sessionTemplateService = new SessionTemplateService(visitSchedulerApiClientBuilder, hmppsAuthClient)

  const userService = new UserService(hmppsAuthClient)

  return {
    applicationInfo,
    categoryGroupService,
    incentiveLevelGroupService,
    locationGroupService,
    prisonService,
    sessionTemplateService,
    userService,
  }
}

export type Services = ReturnType<typeof services>

export {
  CategoryGroupService,
  IncentiveLevelGroupService,
  LocationGroupService,
  PrisonService,
  SessionTemplateService,
  UserService,
}
