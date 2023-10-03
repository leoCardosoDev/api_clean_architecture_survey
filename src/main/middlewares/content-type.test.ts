import request from 'supertest'
import setupApp from '../config/app'

describe('Content Type Middleware', () => {
  test('Should return default content type as json', async () => {
    setupApp.get('/test_content_type', (req, res) => {
      res.send('')
    })
    await request(setupApp)
      .get('/test_content_type')
      .expect('content-type', /json/)
  })

  test('Should return xml content type when forced', async () => {
    setupApp.get('/test_content_type_xml', (req, res) => {
      res.type('xml')
      res.send('')
    })
    await request(setupApp)
      .get('/test_content_type_xml')
      .expect('content-type', /xml/)
  })
})
