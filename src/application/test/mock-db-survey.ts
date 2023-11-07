import { SurveyModel } from '@/domain/model/survey'
import { mockSurvey, mockSurveysModels } from '@/domain/test'
import { AddSurveyParams } from '@/domain/usecase/survey/add-survey'
import { AddSurveyRepository } from '@/application/protocols/db/survey/add-survey-repository'
import { LoadSurveyByIdRepository } from '@/application/protocols/db/survey/load-survey-by-id-repository'
import { LoadSurveysRepository } from '@/application/protocols/db/survey/load-surveys-repository'

export const mockAddSurveyRepository = (): AddSurveyRepository => {
  class AddSurveyRepositoryStub implements AddSurveyRepository {
    async add (surveyData: AddSurveyParams): Promise<void> {
      return Promise.resolve()
    }
  }
  return new AddSurveyRepositoryStub()
}

export const mockLoadSurveyByIdRepository = (): LoadSurveyByIdRepository => {
  class LoadSurveyByIdRepositoryStub implements LoadSurveyByIdRepository {
    async loadById (): Promise<SurveyModel> {
      return Promise.resolve(mockSurvey())
    }
  }
  return new LoadSurveyByIdRepositoryStub()
}

export const mockLoadSurveysRepository = (): LoadSurveysRepository => {
  class LoadSurveysRepositoryStub implements LoadSurveysRepository {
    async loadAll (): Promise<SurveyModel[]> {
      return Promise.resolve(mockSurveysModels())
    }
  }
  return new LoadSurveysRepositoryStub()
}
