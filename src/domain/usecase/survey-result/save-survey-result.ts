import { SurveyResultModel } from '@/domain/model/survey-result'

export type SaveSurveyResultParams = Omit<SurveyResultModel, 'id'>

export interface SaveSurveyResult {
  save (data: SaveSurveyResultParams): Promise<SurveyResultModel>
}
