import { Model } from 'mongoose'
import { IUser, UserModel } from '../../entities/User'
import { ICreateUserDTO, IUsersRepository } from './IUsersRepository'

export class UsersRepository implements IUsersRepository {
  private model: Model<IUser>
  constructor() {
    this.model = UserModel
  }

  async create({
    name,
    email,
    password,
    driverLicense,
  }: ICreateUserDTO): Promise<IUser> {
    const newUser = await this.model.create({
      name,
      email,
      password,
      driverLicense,
    })

    await newUser.save()

    return newUser
  }

  async findByEmail(email: string): Promise<IUser> {
    const user = await this.model.findOne({ email })
    return user
  }
}
