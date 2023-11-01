import request from 'supertest'
import setupApp from '@/main/config/app'

describe('Body Parse Middleware', () => {
  test('Should parse body as json', async () => {
    setupApp.post('/test_body_parser', (req, res) => {
      res.send(req.body)
    })
    await request(setupApp)
      .post('/test_body_parser')
      .send({ name: 'Leo' })
      .expect({ name: 'Leo' })
  })
})
