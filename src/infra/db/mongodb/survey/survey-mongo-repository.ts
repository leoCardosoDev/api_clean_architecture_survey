import { SurveyModel } from '../../../../domain/model/survey'
import { AddSurveyModel } from '../../../../domain/usecase/add-survey'
import { AddSurveyRepository } from '../../../../application/protocols/db/survey/add-survey-repository'
import { LoadSurveysRepository } from '../../../../application/protocols/db/survey/load-surveys-repository'
import { MongoHelper } from '../helpers/mongo-helper'

export class SurveyMongoRepository implements AddSurveyRepository, LoadSurveysRepository {
  async add (surveyData: AddSurveyModel): Promise<void> {
    const surveyCollection = await MongoHelper.getCollection('surveys')
    await surveyCollection.insertOne(surveyData)
  }

  async loadAll (): Promise<SurveyModel[]> {
    const surveyCollection = await MongoHelper.getCollection('surveys')
    const surveys = surveyCollection.find().toArray()
    return surveys
  }
}
