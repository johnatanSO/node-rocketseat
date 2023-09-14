import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { inject, injectable } from 'tsyringe'
import { IUsersRepository } from '../../../repositories/Users/IUsersRepository'

interface IRequest {
  email: string
  password: string
}

interface IResponse {
  user: {
    name: string
    email: string
  }
  token: string
}

@injectable()
export class AuthenticateUserUseCase {
  usersRepository: IUsersRepository
  constructor(@inject('UsersRepository') usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository
  }

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email)
    if (!user) throw new Error('E-mail ou senha incorretos')

    const passwordMatch = compare(password, user.password)
    if (!passwordMatch) throw new Error('E-mail ou senha incorretos')

    const token = sign({}, 'b266fd9110e2a1a83398105a8d6cec43', {
      subject: user._id.toString(),
      expiresIn: '1d',
    })

    return { user, token }
  }
}
