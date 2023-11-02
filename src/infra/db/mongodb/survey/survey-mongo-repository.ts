import { SurveyModel } from '@/domain/model/survey'
import { AddSurveyModel } from '@/domain/usecase/add-survey'
import { AddSurveyRepository } from '@/application/protocols/db/survey/add-survey-repository'
import { LoadSurveysRepository } from '@/application/protocols/db/survey/load-surveys-repository'
import { LoadSurveyByIdRepository } from '@/application/usecases/load-survey-by-id/db-load-survey-by-id-protocols'
import { MongoHelper } from '../helpers/mongo-helper'

export class SurveyMongoRepository implements AddSurveyRepository, LoadSurveysRepository, LoadSurveyByIdRepository {
  async add (surveyData: AddSurveyModel): Promise<void> {
    const surveyCollection = await MongoHelper.getCollection('surveys')
    await surveyCollection.insertOne(surveyData)
  }

  async loadAll (): Promise<SurveyModel[]> {
    const surveyCollection = await MongoHelper.getCollection('surveys')
    const surveys = surveyCollection.find().toArray()
    return surveys
  }

  async loadById (id: string): Promise<SurveyModel> {
    const surveyCollection = await MongoHelper.getCollection('surveys')
    const survey = await surveyCollection.findOne({ _id: id })
    return survey
  }
}
