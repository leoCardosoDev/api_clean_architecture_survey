import { SurveyResultModel } from '@/domain/model/survey-result'

export interface loadSurveyResult {
  save (surveyId: string): Promise<SurveyResultModel>
}
