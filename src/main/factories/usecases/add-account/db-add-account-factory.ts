import { AddAccount } from '../../../../domain/usecase/add-account'
import { DbAddAccount } from '../../../../application/usecases/add-account/db-add-account'
import { BcryptAdapter } from '../../../../infra/criptogrphy/bcrypt/bcrypt-adapter'
import { AccountMongoRepository } from '../../../../infra/db/mongodb/account/account-mongo-repository'

export const makeDbAddAccount = (): AddAccount => {
  const salt = 12
  const bcryptAdapter = new BcryptAdapter(salt)
  const accountMongoRepository = new AccountMongoRepository()
  return new DbAddAccount(bcryptAdapter, accountMongoRepository)
}