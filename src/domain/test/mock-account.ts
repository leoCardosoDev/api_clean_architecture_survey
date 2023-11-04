import { AccountModel } from '@/domain/model/account'
import { AddAccountParams } from '@/domain/usecase/account/add-account'
import { AuthenticationParams } from '@/domain/usecase/account/authentication'

export const mockAddAccountParams = (): AddAccountParams => ({
  name: 'any_name',
  email: 'any_email@email.com',
  password: 'any_password'
})

export const mockAccountModel = (): AccountModel => Object.assign({}, mockAddAccountParams(), { id: 'any_id' })

export const mockAuthentication = (): AuthenticationParams => ({
  email: 'any_email@email.com',
  password: 'any_password'
})
