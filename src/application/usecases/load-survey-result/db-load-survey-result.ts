import { loadSurveyResult } from '@/domain/usecase/survey-result/load-survey-result'
import { SurveyResultModel } from '../survey-result/save-survey-result/db-save-survey-result-protocols'
import { LoadSurveyResultRepository } from '@/application/protocols/db/survey-result/load-survey-result-repository'

export class DbLoadSurveyResult implements loadSurveyResult {
  constructor (private readonly loadSurveyResultRepository: LoadSurveyResultRepository) {}
  async load (surveyId: string): Promise<SurveyResultModel> {
    await this.loadSurveyResultRepository.loadBySurveyId(surveyId)
    return null
  }
}
