import { SurveyResultModel } from '@/domain/model/survey-result'
import { SaveSurveyResultParams } from '@/domain/usecase/survey-result/save-survey-result'

export interface SaveSurveyResultRepository {
  save (data: SaveSurveyResultParams): Promise<SurveyResultModel>
}
