import { Authentication } from '@/domain/usecase/account/authentication'
import { DbAuthentication } from '@/application/usecases/account/authentication/db-authentication'
import { BcryptAdapter } from '@/infra/criptogrphy/bcrypt/bcrypt-adapter'
import { JwtAdapter } from '@/infra/criptogrphy/jwt/jwt-adapter'
import { AccountMongoRepository } from '@/infra/db/mongodb/account/account-mongo-repository'
import env from '@/main/config/env'

export const makeDbAuthentication = (): Authentication => {
  const salt = 12
  const bcryptAdapter = new BcryptAdapter(salt)
  const jwtAdapter = new JwtAdapter(env.jwtSecret)
  const accountMongoRepository = new AccountMongoRepository()
  return new DbAuthentication(accountMongoRepository, bcryptAdapter, jwtAdapter, accountMongoRepository)
}
