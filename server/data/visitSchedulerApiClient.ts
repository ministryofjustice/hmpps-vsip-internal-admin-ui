import RestClient from './restClient'
import config from '../config'
import {
  CreateSessionTemplateDto,
  Prison,
  SessionLocationGroup,
  SessionTemplate,
  SessionTemplatesRangeType,
} from './visitSchedulerApiTypes'

export default class VisitSchedulerApiClient {
  private restClient: RestClient

  constructor(token: string) {
    this.restClient = new RestClient('visitSchedulerApiClient', config.apis.visitScheduler, token)
  }

  async getAllPrisons(): Promise<Prison[]> {
    return this.restClient.get({
      path: '/admin/prisons',
    })
  }

  async getPrison(prisonId: string): Promise<Prison> {
    return this.restClient.get({
      path: `/admin/prisons/prison/${prisonId}`,
    })
  }

  async createPrison(prison: Prison): Promise<Prison> {
    return this.restClient.post({
      path: '/admin/prisons/prison',
      data: <Prison>{
        active: prison.active,
        code: prison.code,
        excludeDates: prison.excludeDates,
      },
    })
  }

  async activatePrison(prisonCode: string): Promise<Prison> {
    return this.restClient.put({
      path: `/admin/prisons/prison/${prisonCode}/activate`,
    })
  }

  async deactivatePrison(prisonCode: string): Promise<Prison> {
    return this.restClient.put({
      path: `/admin/prisons/prison/${prisonCode}/deactivate`,
    })
  }

  async addExcludeDate(prisonCode: string, excludeDate: string): Promise<Prison> {
    return this.restClient.put({
      path: `/admin/prisons/prison/${prisonCode}/exclude-date/add`,
      data: {
        excludeDate,
      },
    })
  }

  async removeExcludeDate(prisonCode: string, excludeDate: string): Promise<Prison> {
    return this.restClient.put({
      path: `/admin/prisons/prison/${prisonCode}/exclude-date/remove`,
      data: {
        excludeDate,
      },
    })
  }

  // Session template controller`````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
  async getSessionTemplates(prisonCode: string, rangeType: SessionTemplatesRangeType): Promise<SessionTemplate[]> {
    return this.restClient.get({
      path: `/admin/session-templates`,
      query: new URLSearchParams({
        prisonCode,
        rangeType,
      }).toString(),
    })
  }

  async getSingleSessionTemplate(reference: string): Promise<SessionTemplate> {
    return this.restClient.get({
      path: `/admin/session-templates/template/${reference}`,
    })
  }

  async activateSessionTemplate(reference: string): Promise<SessionTemplate> {
    return this.restClient.put({
      path: `/admin/session-templates/template/${reference}/activate`,
    })
  }

  async deactivateSessionTemplate(reference: string): Promise<SessionTemplate> {
    return this.restClient.put({
      path: `/admin/session-templates/template/${reference}/deactivate`,
    })
  }

  async createSessionTemplate(createSessionTemplateDto: CreateSessionTemplateDto): Promise<SessionTemplate> {
    return this.restClient.post({
      path: `/admin/session-templates/template`,
      data: createSessionTemplateDto,
    })
  }

  async getLocationGroups(prisonCode: string): Promise<SessionLocationGroup> {
    return this.restClient.get({
      path: `/admin/location-groups/${prisonCode}`,
    })
  }
}
