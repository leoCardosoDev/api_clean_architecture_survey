import faker from 'faker'
import { Hasher } from '@/application/protocols/criptogrphy/hasher'
import { Decrypter } from '@/application/protocols/criptogrphy/decrypter'
import { Encrypter } from '@/application/protocols/criptogrphy/encrypter'
import { HashComparer } from '@/application/protocols/criptogrphy/hash-comparer'

export class HasherSpy implements Hasher {
  digest = faker.random.uuid()
  plaintext: string

  async hash (plaintext: string): Promise<string> {
    this.plaintext = plaintext
    return Promise.resolve(this.digest)
  }
}

export class HashComparerSpy implements HashComparer {
  plaintext: string
  digest: string
  isValid = true

  async compare (plaintext: string, digest: string): Promise<boolean> {
    this.plaintext = plaintext
    this.digest = digest
    return Promise.resolve(this.isValid)
  }
}

export class EncrypterSpy implements Encrypter {
  ciphertext = faker.random.uuid()
  plaintext: string

  async encrypt (plaintext: string): Promise<string> {
    this.plaintext = plaintext
    return Promise.resolve(this.ciphertext)
  }
}

export class DecrypterSpy implements Decrypter {
  plaintext = faker.internet.password()
  ciphertext: string

  async decrypt (ciphertext: string): Promise<string> {
    this.ciphertext = ciphertext
    return Promise.resolve(this.plaintext)
  }
}
