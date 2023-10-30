import jwt from 'jsonwebtoken'
import { Encrypter } from '../../../application/protocols/criptogrphy/encrypter'
import { Decrypter } from '../../../application/protocols/criptogrphy/decrypter'

export class JwtAdapter implements Encrypter, Decrypter {
  constructor (private readonly secret: string) {
    this.secret = secret
  }

  async encrypt (value: string): Promise<string> {
    const accessToken = await jwt.sign({ id: value }, this.secret)
    return accessToken
  }

  async decrypt (value: string): Promise<string> {
    await jwt.verify(value, this.secret)
    return null
  }
}
