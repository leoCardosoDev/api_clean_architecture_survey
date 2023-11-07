import { LoadSurveyResultRepository, SurveyResultModel, loadSurveyResult } from './db-load-survey-result-protocols'

export class DbLoadSurveyResult implements loadSurveyResult {
  constructor (private readonly loadSurveyResultRepository: LoadSurveyResultRepository) {}
  async load (surveyId: string): Promise<SurveyResultModel> {
    const surveyResult = await this.loadSurveyResultRepository.loadBySurveyId(surveyId)
    return surveyResult
  }
}
