import MockDate from 'mockdate'
import { throwError } from '@/domain/test'
import { badRequest, noContent, serverError } from '@/presentation/helpers/http/http-helper'
import { mockAddSurvey, mockValidation } from '@/presentation/test'
import { AddSurvey, AddSurveyController, HttpRequest, Validation } from './add-survey-controller-protocols'

type SutTypes = {
  sut: AddSurveyController
  validationStub: Validation
  addSurveyStub: AddSurvey
}

const mockRequest = (): HttpRequest => ({
  body: {
    question: 'any_question',
    answers: [{
      image: 'any_image',
      answer: 'any_answer'
    }],
    date: new Date()
  }
})

const makeSut = (): SutTypes => {
  const validationStub = mockValidation()
  const addSurveyStub = mockAddSurvey()
  const sut = new AddSurveyController(validationStub, addSurveyStub)
  return {
    sut,
    validationStub,
    addSurveyStub
  }
}

describe('AddSurvey Controller', () => {
  beforeAll(() => {
    MockDate.set(new Date())
  })

  afterAll(() => {
    MockDate.reset()
  })
  test('Should call Validation with corret values', async () => {
    const { sut, validationStub } = makeSut()
    const validationSpy = jest.spyOn(validationStub, 'validate')
    const httpRequest = mockRequest()
    await sut.handle(httpRequest)
    expect(validationSpy).toHaveBeenCalledWith(httpRequest.body)
  })

  test('Should returns 400 if Validation fails', async () => {
    const { sut, validationStub } = makeSut()
    jest.spyOn(validationStub, 'validate').mockReturnValueOnce(new Error())
    const httpRequest = await sut.handle(mockRequest())
    expect(httpRequest).toEqual(badRequest(new Error()))
  })

  test('Should call Validation with corret values', async () => {
    const { sut, addSurveyStub } = makeSut()
    const addSpy = jest.spyOn(addSurveyStub, 'add')
    const httpRequest = mockRequest()
    await sut.handle(httpRequest)
    expect(addSpy).toHaveBeenCalledWith(httpRequest.body)
  })

  test('Should returns 500 if AddSurvey throws', async () => {
    const { sut, addSurveyStub } = makeSut()
    jest.spyOn(addSurveyStub, 'add').mockImplementationOnce(() => throwError())
    const httpRequest = await sut.handle(mockRequest())
    expect(httpRequest).toEqual(serverError(new Error()))
  })

  test('Should returns 204 on success', async () => {
    const { sut } = makeSut()
    const httpRequest = await sut.handle(mockRequest())
    expect(httpRequest).toEqual(noContent())
  })
})
