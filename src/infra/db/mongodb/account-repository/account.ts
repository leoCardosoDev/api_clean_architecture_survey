import { AddAccountRepository } from '../../../../application/protocols/db/add-account-repositoy'
import { LoadAccountByEmailRepository } from '../../../../application/protocols/db/load-account-by-email-repository'
import { AccountModel } from '../../../../domain/model/account'
import { AddAccountModel } from '../../../../domain/usecase/add-account'
import { MongoHelper } from '../helpers/mongo-helper'

export class AccountMongoRepository implements AddAccountRepository, LoadAccountByEmailRepository {
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
}
