import { AccountModel } from '../../../domain/model/account'
import { LoadAccountByToken } from '../../../domain/usecase/load-account-by-token'
import { Decrypter } from '../../protocols/criptogrphy/decrypter'

export class DbLoadAccountByToken implements LoadAccountByToken {
  constructor (private readonly decrypter: Decrypter) {}
  async load (accessToken: string, role?: string): Promise<AccountModel> {
    await this.decrypter.decrypt(accessToken)
    return null
  }
}
