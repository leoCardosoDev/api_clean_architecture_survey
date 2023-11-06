import { SurveyResultModel } from '@/domain/model/survey-result'

export interface loadSurveyResult {
  load (surveyId: string): Promise<SurveyResultModel>
}
