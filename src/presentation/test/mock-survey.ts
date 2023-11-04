import { SurveyModel } from '@/domain/model/survey'
import { mockSurvey, mockSurveysModels } from '@/domain/test'
import { AddSurvey, AddSurveyParams } from '@/domain/usecase/survey/add-survey'
import { LoadSurveyById } from '@/domain/usecase/survey/load-survey-by-id'
import { LoadSurveys } from '@/domain/usecase/survey/load-surveys'

export const mockAddSurvey = (): AddSurvey => {
  class AddSurveyStub implements AddSurvey {
    async add (data: AddSurveyParams): Promise<void> {
      return new Promise(resolve => resolve())
    }
  }
  return new AddSurveyStub()
}

export const mockLoadSurveys = (): LoadSurveys => {
  class LoadSurveysStub implements LoadSurveys {
    async load (): Promise<SurveyModel[]> {
      return new Promise(resolve => resolve(mockSurveysModels()))
    }
  }
  return new LoadSurveysStub()
}

export const mockLoadSurveyById = (): LoadSurveyById => {
  class LoadSurveyByIdStub implements LoadSurveyById {
    async loadById (id: string): Promise<SurveyModel> {
      return new Promise(resolve => resolve(mockSurvey()))
    }
  }
  return new LoadSurveyByIdStub()
}
