import type { Express } from 'express'
import request from 'supertest'
import * as cheerio from 'cheerio'
import { appWithAllRoutes } from './testutils/appSetup'

let app: Express

beforeEach(() => {
  app = appWithAllRoutes({})
})

afterEach(() => {
  jest.resetAllMocks()
})

describe('GET /', () => {
  it('should render the home page cards', () => {
    app = appWithAllRoutes({})

    return request(app)
      .get('/')
      .expect('Content-Type', /html/)
      .expect(res => {
        const $ = cheerio.load(res.text)
        expect($('h1 span').text().trim()).toBe('Visits internal admin')

        expect($('.card').length).toBe(2)
        expect($('[data-test="administer-prisons"] .card__link').text()).toBe('Supported prisons')
        expect($('[data-test="administer-prisons"] .card__link').attr('href')).toBe('/prisons')
        expect($('[data-test="administer-timetables"] .card__link').text()).toBe('Visit timetables')
        expect($('[data-test="administer-timetables"] .card__link').attr('href')).toBe('/timetables')
      })
  })
})
