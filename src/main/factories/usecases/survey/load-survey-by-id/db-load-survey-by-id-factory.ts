import { LoadSurveyById } from '@/domain/usecase/survey/load-survey-by-id'
import { DbLoadSurveyById } from '@/application/usecases/survey/load-survey-by-id/db-load-survey-by-id'
import { SurveyMongoRepository } from '@/infra/db/mongodb/survey/survey-mongo-repository'

export const makeDbLoadSurveyById = (): LoadSurveyById => {
  const surveyMongoRepository = new SurveyMongoRepository()
  return new DbLoadSurveyById(surveyMongoRepository)
}
