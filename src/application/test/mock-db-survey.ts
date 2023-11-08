import { SurveyModel } from '@/domain/model/survey'
import { mockSurveyModel, mockSurveyModels } from '@/domain/test'
import { AddSurveyParams } from '@/domain/usecase/survey/add-survey'
import { AddSurveyRepository } from '@/application/protocols/db/survey/add-survey-repository'
import { LoadSurveyByIdRepository } from '@/application/protocols/db/survey/load-survey-by-id-repository'
import { LoadSurveysRepository } from '@/application/protocols/db/survey/load-surveys-repository'

export class AddSurveyRepositorySpy implements AddSurveyRepository {
  addSurveyParams: AddSurveyParams

  async add (data: AddSurveyParams): Promise<void> {
    this.addSurveyParams = data
    return Promise.resolve()
  }
}

export class LoadSurveyByIdRepositorySpy implements LoadSurveyByIdRepository {
  surveyModel = mockSurveyModel()
  id: string

  async loadById (id: string): Promise<SurveyModel> {
    this.id = id
    return Promise.resolve(this.surveyModel)
  }
}

export class LoadSurveysRepositorySpy implements LoadSurveysRepository {
  surveyModels = mockSurveyModels()
  accountId: string

  async loadAll (accountId: string): Promise<SurveyModel[]> {
    this.accountId = accountId
    return Promise.resolve(this.surveyModels)
  }
}
