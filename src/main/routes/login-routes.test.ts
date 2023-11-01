import { MongoHelper } from '@/infra/db/mongodb/helpers/mongo-helper'
import setupApp from '@/main/config/app'
import request from 'supertest'
import { Collection } from 'mongodb'
import { hash } from 'bcrypt'

let accountCollection: Collection
describe('Login Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  describe('POST - signup', () => {
    test('Should return 200 on signup', async () => {
      await request(setupApp)
        .post('/api/signup')
        .send({
          name: 'any_name',
          email: 'any_email@email.com',
          password: 'any_password',
          passwordConfirmation: 'any_password'
        }).expect(200)
    })
  })

  describe('POST - login', () => {
    test('Should return 200 on login', async () => {
      const password = await hash('123', 12)
      await accountCollection.insertOne({
        name: 'Leo Silva',
        email: 'leosilva@gmail.com',
        password
      })
      await request(setupApp)
        .post('/api/login')
        .send({
          email: 'leosilva@gmail.com',
          password: '123'
        }).expect(200)
    })

    test('Should return 401 on login', async () => {
      await request(setupApp)
        .post('/api/login')
        .send({
          email: 'leosilva@gmail.com',
          password: '123'
        }).expect(401)
    })
  })
})
