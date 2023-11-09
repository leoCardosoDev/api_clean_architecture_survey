import { SurveyMongoRepository } from '@/infra/db'
import { CheckSurveyById } from '@/domain/usecases'
import { DbCheckSurveyById } from '@/application/usecases'

export const makeDbCheckSurveyById = (): CheckSurveyById => {
  const surveyMongoRepository = new SurveyMongoRepository()
  return new DbCheckSurveyById(surveyMongoRepository)
}
