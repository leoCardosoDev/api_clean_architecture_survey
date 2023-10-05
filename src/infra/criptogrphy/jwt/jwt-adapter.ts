import jwt from 'jsonwebtoken'
import { Encrypter } from '../../../application/protocols/criptogrphy/encrypter'

export class JwtAdapter implements Encrypter {
  constructor (private readonly secret: string) {
    this.secret = secret
  }

  async encrypt (value: string): Promise<string> {
    const accessToken = await jwt.sign({ id: value }, this.secret)
    return accessToken
  }
}
