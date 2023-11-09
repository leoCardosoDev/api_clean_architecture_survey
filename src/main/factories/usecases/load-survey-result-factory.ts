import { LoadSurveyResult } from '@/domain/usecases'
import { DbLoadSurveyResult } from '@/application/usecases'
import { SurveyResultMongoRepository, SurveyMongoRepository } from '@/infra/db'

export const makeDbLoadSurveyResult = (): LoadSurveyResult => {
  const surveyResultMongoRepository = new SurveyResultMongoRepository()
  const surveyMongoRepository = new SurveyMongoRepository()
  return new DbLoadSurveyResult(surveyResultMongoRepository, surveyMongoRepository)
}
