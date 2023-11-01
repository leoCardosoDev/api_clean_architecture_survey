import { AccountModel } from '@/domain/model/account'
import { AddAccountModel } from '@/domain/usecase/add-account'
import { AddAccountRepository } from '@/application/protocols/db/account/add-account-repositoy'
import { LoadAccountByEmailRepository } from '@/application/protocols/db/account/load-account-by-email-repository'
import { LoadAccountByTokenRepository } from '@/application/protocols/db/account/load-account-by-token-repository'
import { UpdateAccessTokenRepository } from '@/application/protocols/db/account/update-access-token-repository'
import { MongoHelper } from '../helpers/mongo-helper'

export class AccountMongoRepository implements AddAccountRepository, LoadAccountByEmailRepository, UpdateAccessTokenRepository, LoadAccountByTokenRepository {
  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    const result = await accountCollection.insertOne(accountData)
    return MongoHelper.map(result.ops[0])
  }

  async loadByEmail (email: string): Promise<AccountModel> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    const account = await accountCollection.findOne({ email })
    return account && MongoHelper.map(account)
  }

  async updateAccessToken (id: string, token: string): Promise<void> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.updateOne({ _id: id }, { $set: { accessToken: token } })
  }

  async loadByToken (token: string, role?: string): Promise<AccountModel> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    const account = await accountCollection.findOne({ accessToken: token, $or: [{ role }, { role: 'admin' }] })
    return account && MongoHelper.map(account)
  }
}
