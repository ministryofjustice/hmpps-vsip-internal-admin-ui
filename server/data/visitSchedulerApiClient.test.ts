import nock from 'nock'
import config from '../config'
import VisitSchedulerApiClient from './visitSchedulerApiClient'
import TestData from '../routes/testutils/testData'
import { CreateSessionTemplateDto, Prison } from './visitSchedulerApiTypes'

describe('visitSchedulerApiClient', () => {
  let fakeVisitSchedulerApi: nock.Scope
  let visitSchedulerApiClient: VisitSchedulerApiClient
  const token = 'token-1'

  beforeEach(() => {
    fakeVisitSchedulerApi = nock(config.apis.visitScheduler.url)
    visitSchedulerApiClient = new VisitSchedulerApiClient(token)
  })

  afterEach(() => {
    if (!nock.isDone()) {
      nock.cleanAll()
      throw new Error('Not all nock interceptors were used!')
    }
    nock.abortPendingRequests()
    nock.cleanAll()
  })

  describe('getAllPrisons', () => {
    it('should return an array of all supported Prisons', async () => {
      const results = TestData.prisons()

      fakeVisitSchedulerApi.get('/admin/prisons').matchHeader('authorization', `Bearer ${token}`).reply(200, results)

      const output = await visitSchedulerApiClient.getAllPrisons()

      expect(output).toEqual(results)
    })
  })

  describe('getPrison', () => {
    it('should return details of specified prison', async () => {
      const prison = TestData.prison()

      fakeVisitSchedulerApi
        .get(`/admin/prisons/prison/${prison.code}`)
        .matchHeader('authorization', `Bearer ${token}`)
        .reply(200, prison)

      const output = await visitSchedulerApiClient.getPrison(prison.code)

      expect(output).toEqual(prison)
    })
  })

  describe('createPrison', () => {
    it('should add prison to list of supported prisons', async () => {
      const prison: Prison = {
        active: false,
        code: 'BHI',
        excludeDates: [],
      }

      fakeVisitSchedulerApi
        .post('/admin/prisons/prison', <Prison>{
          active: prison.active,
          code: prison.code,
          excludeDates: prison.excludeDates,
        })
        .matchHeader('authorization', `Bearer ${token}`)
        .reply(201, prison)

      const output = await visitSchedulerApiClient.createPrison(prison)

      expect(output).toEqual(prison)
    })
  })

  describe('activatePrison', () => {
    it('should return activated prison', async () => {
      const prison = TestData.prison()

      fakeVisitSchedulerApi
        .put(`/admin/prisons/prison/${prison.code}/activate`)
        .matchHeader('authorization', `Bearer ${token}`)
        .reply(200, prison)

      const output = await visitSchedulerApiClient.activatePrison(prison.code)

      expect(output).toEqual(prison)
    })
  })

  describe('deactivatePrison', () => {
    it('should return deactivated prison', async () => {
      const prison = TestData.prison()

      fakeVisitSchedulerApi
        .put(`/admin/prisons/prison/${prison.code}/deactivate`)
        .matchHeader('authorization', `Bearer ${token}`)
        .reply(200, prison)

      const output = await visitSchedulerApiClient.deactivatePrison(prison.code)

      expect(output).toEqual(prison)
    })
  })

  describe('addExcludedDate', () => {
    it('should make call to add exclude date to a prison and return the PrisonDto', async () => {
      const excludeDate = '2023-12-26'
      const prison = TestData.prison()
      const prisonWithExcludeDates = TestData.prison({ excludeDates: [excludeDate] })

      fakeVisitSchedulerApi
        .put(`/admin/prisons/prison/${prison.code}/exclude-date/add`, { excludeDate })
        .matchHeader('authorization', `Bearer ${token}`)
        .reply(200, prisonWithExcludeDates)

      const output = await visitSchedulerApiClient.addExcludeDate(prison.code, '2023-12-26')

      expect(output).toEqual(prisonWithExcludeDates)
    })
  })

  describe('removeExcludedDate', () => {
    it('should make call to remove exclude date from a prison', async () => {
      const excludeDate = '2023-12-26'
      const prison = TestData.prison({ excludeDates: [excludeDate] })

      fakeVisitSchedulerApi
        .put(`/admin/prisons/prison/${prison.code}/exclude-date/remove`, { excludeDate })
        .matchHeader('authorization', `Bearer ${token}`)
        .reply(200)

      await visitSchedulerApiClient.removeExcludeDate(prison.code, excludeDate)
      expect(fakeVisitSchedulerApi.isDone()).toBe(true)
    })
  })

  describe('getSessionTemplates', () => {
    it('should return all session templates for a prison', async () => {
      const sessionTemplates = [TestData.sessionTemplate()]

      fakeVisitSchedulerApi
        .get(`/admin/session-templates`)
        .query({
          prisonCode: 'HEI',
          rangeType: 'ALL',
        })
        .matchHeader('authorization', `Bearer ${token}`)
        .reply(200, sessionTemplates)

      const output = await visitSchedulerApiClient.getSessionTemplates('HEI', 'ALL')

      expect(output).toEqual(sessionTemplates)
    })
  })

  describe('getSingleSessionTemplate', () => {
    it('should return a session template', async () => {
      const singleSessionTemplate = TestData.sessionTemplate()

      fakeVisitSchedulerApi
        .get(`/admin/session-templates/template/${singleSessionTemplate.reference}`)
        .matchHeader('authorization', `Bearer ${token}`)
        .reply(200, singleSessionTemplate)

      const output = await visitSchedulerApiClient.getSingleSessionTemplate(singleSessionTemplate.reference)

      expect(output).toEqual(singleSessionTemplate)
    })
  })

  describe('createSessionTemplate', () => {
    it('should add a new session template', async () => {
      const createSessionTemplateDto = TestData.createSessionTemplateDto()

      fakeVisitSchedulerApi
        .post('/admin/session-templates/template', <CreateSessionTemplateDto>{
          name: createSessionTemplateDto.name,
          weeklyFrequency: createSessionTemplateDto.weeklyFrequency,
          dayOfWeek: createSessionTemplateDto.dayOfWeek,
          prisonId: createSessionTemplateDto.prisonId,
          sessionCapacity: createSessionTemplateDto.sessionCapacity,
          sessionDateRange: createSessionTemplateDto.sessionDateRange,
          sessionTimeSlot: createSessionTemplateDto.sessionTimeSlot,
          visitRoom: createSessionTemplateDto.visitRoom,
          categoryGroupReferences: [],
          incentiveLevelGroupReferences: [],
          locationGroupReferences: [],
        })
        .matchHeader('authorization', `Bearer ${token}`)
        .reply(201, createSessionTemplateDto)

      const output = await visitSchedulerApiClient.createSessionTemplate(createSessionTemplateDto)

      expect(output).toEqual(createSessionTemplateDto)
    })
  })

  describe('getLocationGroups', () => {
    it('should return all location groups for a prison', async () => {
      const prisonCode = 'HEI'
      const locationGroups = [TestData.locationGroup()]

      fakeVisitSchedulerApi
        .get(`/admin/location-groups/${prisonCode}`)
        .matchHeader('authorization', `Bearer ${token}`)
        .reply(200, locationGroups)

      const output = await visitSchedulerApiClient.getLocationGroups('HEI')

      expect(output).toEqual(locationGroups)
    })
  })

  describe('getCategoryGroups', () => {
    it('should return all category groups for a prison', async () => {
      const prisonCode = 'HEI'
      const categoryGroups = [TestData.categoryGroup()]

      fakeVisitSchedulerApi
        .get(`/admin/category-groups/${prisonCode}`)
        .matchHeader('authorization', `Bearer ${token}`)
        .reply(200, categoryGroups)

      const output = await visitSchedulerApiClient.getCategoryGroups('HEI')

      expect(output).toEqual(categoryGroups)
    })
  })

  describe('getIncentiveLevelGroups', () => {
    it('should return all incentive level groups for a prison', async () => {
      const prisonCode = 'HEI'
      const incentiveGroups = [TestData.incentiveLevelGroup()]

      fakeVisitSchedulerApi
        .get(`/admin/incentive-groups/${prisonCode}`)
        .matchHeader('authorization', `Bearer ${token}`)
        .reply(200, incentiveGroups)

      const output = await visitSchedulerApiClient.getIncentiveLevelGroups('HEI')

      expect(output).toEqual(incentiveGroups)
    })
  })
})
