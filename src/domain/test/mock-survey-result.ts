import { SurveyResultModel } from '@/domain/model/survey-result'
import { SaveSurveyResultParams } from '@/domain/usecase/survey-result/save-survey-result'

export const mockSaveSurveyResultParams = (): SaveSurveyResultParams => ({
  surveyId: 'any_survey_id',
  accountId: 'any_account_id',
  answer: 'any_answer',
  date: new Date()
})

export const mockSaveSurveyResultModel = (): SurveyResultModel => Object.assign({}, mockSaveSurveyResultParams(), { id: 'any_id' })
