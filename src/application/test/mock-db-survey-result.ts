import { SurveyResultModel } from '@/domain/model/survey-result'
import { SaveSurveyResultParams } from '@/domain/usecase/survey-result/save-survey-result'
import { mockSaveSurveyResultModel } from '@/domain/test'
import { SaveSurveyResultRepository } from '@/application/protocols/db/survey-result/save-survey-result-repository'
import { LoadSurveyResultRepository } from '@/application/protocols/db/survey-result/load-survey-result-repository'

export const mockSaveSurveyResultRepository = (): SaveSurveyResultRepository => {
  class SaveSurveyResultRepositoryStub implements SaveSurveyResultRepository {
    async save (data: SaveSurveyResultParams): Promise<void> {
      return Promise.resolve()
    }
  }
  return new SaveSurveyResultRepositoryStub()
}

export const mockLoadSurveyResultRepository = (): LoadSurveyResultRepository => {
  class LoadSurveyResultRepositoryStub implements LoadSurveyResultRepository {
    async loadBySurveyId (surveyId: string): Promise<SurveyResultModel> {
      return Promise.resolve(mockSaveSurveyResultModel())
    }
  }
  return new LoadSurveyResultRepositoryStub()
}
