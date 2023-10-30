import { AddSurveyRepository } from '../../../../application/protocols/db/survey/add-survey-repository'
import { AddSurveyModel } from '../../../../domain/usecase/add-survey'
import { MongoHelper } from '../helpers/mongo-helper'

export class SurveyMongoRepository implements AddSurveyRepository {
  async add (surveyData: AddSurveyModel): Promise<void> {
    const surveyCollection = await MongoHelper.getCollection('surveys')
    await surveyCollection.insertOne(surveyData)
  }
}
