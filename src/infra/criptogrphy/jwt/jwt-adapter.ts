import jwt from 'jsonwebtoken'
import { Encrypter } from '@/application/protocols/criptogrphy/encrypter'
import { Decrypter } from '@/application/protocols/criptogrphy/decrypter'

export class JwtAdapter implements Encrypter, Decrypter {
  constructor (private readonly secret: string) {
    this.secret = secret
  }

  async encrypt (plaintext: string): Promise<string> {
    const ciphertext = await jwt.sign({ id: plaintext }, this.secret)
    return ciphertext
  }

  async decrypt (ciphertext: string): Promise<string> {
    const plaintext: any = await jwt.verify(ciphertext, this.secret)
    return plaintext
  }
}
