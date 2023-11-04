import { MongoHelper } from '@/infra/db/mongodb/helpers/mongo-helper'
import setupApp from '@/main/config/app'
import request from 'supertest'
import { Collection } from 'mongodb'
let surveyCollection: Collection
let accountCollection: Collection

describe('Survey Result Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    surveyCollection = await MongoHelper.getCollection('surveys')
    await surveyCollection.deleteMany({})
    accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  describe('PUT - /api/surveys/:surveyId/results', () => {
    test('Should return 403 on save survey result without accessToken', async () => {
      await request(setupApp)
        .put('/api/surveys/any_id/results')
        .send({
          answer: 'any_answer'
        }).expect(403)
    })
  })
})
