import { Model } from 'mongoose'
import { Car, CarModel } from '../../infra/mongoose/entities/Car'
import { ICarsRepository, ICreateNewCarDTO } from './ICarsRepository'

export class CarsRepository implements ICarsRepository {
  model: Model<Car> = CarModel
  async create({
    name,
    description,
    dailyRate,
    licensePlate,
    fineAmount,
    brand,
    categoryId,
  }: ICreateNewCarDTO): Promise<Car> {
    const newCar = await this.model.create({
      name,
      description,
      dailyRate,
      licensePlate,
      fineAmount,
      brand,
      categoryId,
    })

    await newCar.save()

    return newCar
  }

  async findByLicensePlate(licensePlate: string): Promise<Car> {
    return await this.model.findOne({ licensePlate })
  }
}