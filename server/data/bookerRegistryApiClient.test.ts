import nock from 'nock'
import config from '../config'
import TestData from '../routes/testutils/testData'
import BookerRegistryApiClient from './bookerRegistryApiClient'
import { CreateBookerDto, CreatePermittedPrisonerDto, CreatePermittedVisitorDto } from './bookerRegistryApiTypes'

describe('bookerRegistryApiClient', () => {
  let fakeBookerRegistryApi: nock.Scope
  let bookerRegistryApiClient: BookerRegistryApiClient
  const token = 'token-1'

  const booker = TestData.bookerDto()
  const prisoner = TestData.permittedPrisonerDto()

  beforeEach(() => {
    fakeBookerRegistryApi = nock(config.apis.prisonRegister.url)
    bookerRegistryApiClient = new BookerRegistryApiClient(token)
  })

  afterEach(() => {
    if (!nock.isDone()) {
      nock.cleanAll()
      throw new Error('Not all nock interceptors were used!')
    }
    nock.abortPendingRequests()
    nock.cleanAll()
  })

  describe('Booker', () => {
    describe('createBooker', () => {
      it('should call create booker for given email', async () => {
        fakeBookerRegistryApi
          .put('/public/booker/config', <CreateBookerDto>{ email: booker.email })
          .matchHeader('authorization', `Bearer ${token}`)
          .reply(201, booker)

        const output = await bookerRegistryApiClient.createBooker(booker.email)
        expect(output).toStrictEqual(booker)
      })
    })

    describe('getBookerByEmail', () => {
      it('should get booker details for given email', async () => {
        fakeBookerRegistryApi
          .get(`/public/booker/config/email/${booker.email}`)
          .matchHeader('authorization', `Bearer ${token}`)
          .reply(200, booker)

        const output = await bookerRegistryApiClient.getBookerByEmail(booker.email)
        expect(output).toStrictEqual(booker)
      })
    })

    describe('clearBookerDetails', () => {
      it('should get booker details for given email', async () => {
        fakeBookerRegistryApi
          .delete(`/public/booker/config/${booker.reference}`)
          .matchHeader('authorization', `Bearer ${token}`)
          .reply(200, booker)

        const output = await bookerRegistryApiClient.clearBookerDetails(booker.reference)
        expect(output).toStrictEqual(booker)
      })
    })
  })

  describe('Prisoner', () => {
    describe('addPrisoner', () => {
      it('should call add prisoner for given booker reference and prisoner ID', async () => {
        fakeBookerRegistryApi
          .put(`/public/booker/config/${booker.reference}/prisoner`, <CreatePermittedPrisonerDto>{
            prisonerId: prisoner.prisonerId,
            active: true,
          })
          .matchHeader('authorization', `Bearer ${token}`)
          .reply(201, prisoner)

        const output = await bookerRegistryApiClient.addPrisoner(booker.reference, prisoner.prisonerId)
        expect(output).toStrictEqual(prisoner)
      })
    })

    describe('activatePrisoner', () => {
      it('should call activate prisoner for given booker reference and prisoner ID', async () => {
        fakeBookerRegistryApi
          .put(`/public/booker/config/${booker.reference}/prisoner/${prisoner.prisonerId}/activate`)
          .matchHeader('authorization', `Bearer ${token}`)
          .reply(200)

        await bookerRegistryApiClient.activatePrisoner(booker.reference, prisoner.prisonerId)
        expect(fakeBookerRegistryApi.isDone()).toBeTruthy()
      })
    })

    describe('deactivatePrisoner', () => {
      it('should call deactivate prisoner for given booker reference and prisoner ID', async () => {
        fakeBookerRegistryApi
          .put(`/public/booker/config/${booker.reference}/prisoner/${prisoner.prisonerId}/deactivate`)
          .matchHeader('authorization', `Bearer ${token}`)
          .reply(200)

        await bookerRegistryApiClient.deactivatePrisoner(booker.reference, prisoner.prisonerId)
        expect(fakeBookerRegistryApi.isDone()).toBeTruthy()
      })
    })
  })

  describe('Visitor', () => {
    const visitorId = 1234

    describe('addVisitor', () => {
      it('should call add visitor for given booker reference and prisoner ID', async () => {
        fakeBookerRegistryApi
          .put(`/public/booker/config/${booker.reference}/prisoner/${prisoner.prisonerId}/visitor`, <
            CreatePermittedVisitorDto
          >{
            visitorId,
            active: true,
          })
          .matchHeader('authorization', `Bearer ${token}`)
          .reply(201)

        await bookerRegistryApiClient.addVisitor(booker.reference, prisoner.prisonerId, visitorId)
        expect(fakeBookerRegistryApi.isDone()).toBeTruthy()
      })
    })

    describe('activateVisitor', () => {
      it('should call activate visitor for given booker reference, prisoner ID and visitor ID', async () => {
        fakeBookerRegistryApi
          .put(
            `/public/booker/config/${booker.reference}/prisoner/${prisoner.prisonerId}/visitor/${visitorId}/activate`,
          )
          .matchHeader('authorization', `Bearer ${token}`)
          .reply(200)

        await bookerRegistryApiClient.activateVisitor(booker.reference, prisoner.prisonerId, visitorId)
        expect(fakeBookerRegistryApi.isDone()).toBeTruthy()
      })
    })

    describe('deactivateVisitor', () => {
      it('should call deactivate visitor for given booker reference, prisoner ID and visitor ID', async () => {
        fakeBookerRegistryApi
          .put(
            `/public/booker/config/${booker.reference}/prisoner/${prisoner.prisonerId}/visitor/${visitorId}/deactivate`,
          )
          .matchHeader('authorization', `Bearer ${token}`)
          .reply(200)

        await bookerRegistryApiClient.deactivateVisitor(booker.reference, prisoner.prisonerId, visitorId)
        expect(fakeBookerRegistryApi.isDone()).toBeTruthy()
      })
    })
  })
})
