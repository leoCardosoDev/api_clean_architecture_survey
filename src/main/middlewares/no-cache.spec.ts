import request from 'supertest'
import setupApp from '@/main/config/app'
import { noCache } from './no-cache'

describe('NoCache Middleware', () => {
  test('Should enable NoCache', async () => {
    setupApp.get('/test_no_cache', noCache, (req, res) => {
      res.send()
    })
    await request(setupApp)
      .get('/test_no_cache')
      .expect('cache-control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
      .expect('pragma', 'no-cache')
      .expect('expires', '0')
      .expect('surrogate-control', 'no-store')
  })
})
