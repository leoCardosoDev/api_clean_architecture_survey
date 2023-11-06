import { SurveyResultModel } from '@/domain/model/survey-result'

export type SaveSurveyResultParams = {
  surveyId: string
  accountId: string
  answer: string
  date: Date
}

export interface SaveSurveyResult {
  save (data: SaveSurveyResultParams): Promise<SurveyResultModel>
}
