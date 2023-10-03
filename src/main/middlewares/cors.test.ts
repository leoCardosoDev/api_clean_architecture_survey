import request from 'supertest'
import setupApp from '../config/app'

describe('Cors Middleware', () => {
  test('Should enable CORS', async () => {
    setupApp.get('/test_cors', (req, res) => {
      res.send()
    })
    await request(setupApp)
      .get('/test_cors')
      .expect('access-control-allow-origin', '*')
      .expect('access-control-allow-methods', '*')
      .expect('access-control-allow-headers', '*')
  })
})
