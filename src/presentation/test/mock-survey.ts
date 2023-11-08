import { SurveyModel } from '@/domain/model/survey'
import { mockSurveyModel, mockSurveyModels } from '@/domain/test'
import { AddSurvey, AddSurveyParams } from '@/domain/usecase/survey/add-survey'
import { LoadSurveyById } from '@/domain/usecase/survey/load-survey-by-id'
import { LoadSurveys } from '@/domain/usecase/survey/load-surveys'

export class AddSurveySpy implements AddSurvey {
  addSurveyParams: AddSurveyParams

  async add (data: AddSurveyParams): Promise<void> {
    this.addSurveyParams = data
    return Promise.resolve()
  }
}

export class LoadSurveysSpy implements LoadSurveys {
  surveyModels = mockSurveyModels()
  accountId: string

  async load (accountId: string): Promise<SurveyModel[]> {
    this.accountId = accountId
    return Promise.resolve(this.surveyModels)
  }
}

export class LoadSurveyByIdSpy implements LoadSurveyById {
  surveyModel = mockSurveyModel()
  id: string

  async loadById (id: string): Promise<SurveyModel> {
    this.id = id
    return Promise.resolve(this.surveyModel)
  }
}
