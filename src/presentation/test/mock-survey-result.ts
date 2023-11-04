import { SurveyResultModel } from '@/domain/model/survey-result'
import { mockSaveSurveyResultModel } from '@/domain/test'
import { SaveSurveyResult, SaveSurveyResultParams } from '@/domain/usecase/survey-result/save-survey-result'

export const mockSaveSurveyResult = (): SaveSurveyResult => {
  class SaveSurveyResultStub implements SaveSurveyResult {
    async save (data: SaveSurveyResultParams): Promise<SurveyResultModel> {
      return new Promise(resolve => resolve(mockSaveSurveyResultModel()))
    }
  }
  return new SaveSurveyResultStub()
}
