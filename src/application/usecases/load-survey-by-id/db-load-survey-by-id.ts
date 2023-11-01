import { LoadSurveyById } from '@/domain/usecase/load-survey-by-id'
import { SurveyModel } from '@/domain/model/survey'
import { LoadSurveyByIdRepository } from '@/application/protocols/db/survey/load-survey-by-idrepository'

export class DbLoadSurveyById implements LoadSurveyById {
  constructor (private readonly loadSurveyByIdRepository: LoadSurveyByIdRepository) {}
  async loadById (id: string): Promise<SurveyModel> {
    const survey = await this.loadSurveyByIdRepository.loadById(id)
    return survey
  }
}
