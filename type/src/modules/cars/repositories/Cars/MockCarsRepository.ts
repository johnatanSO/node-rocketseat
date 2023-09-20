import { Car } from './../../infra/mongoose/entities/Car'
import { Types } from 'mongoose'
import { ICarsRepository, ICreateNewCarDTO } from './ICarsRepository'

export class MockCarsRepository implements ICarsRepository {
  cars: Car[] = []

  async create({
    name,
    description,
    dailyRate,
    licensePlate,
    fineAmount,
    brand,
    categoryId,
  }: ICreateNewCarDTO): Promise<Car> {
    const newCar = {
      name,
      description,
      dailyRate,
      licensePlate,
      fineAmount,
      brand,
      categoryId: new Types.ObjectId(categoryId),
      _id: new Types.ObjectId(),
      createdAt: new Date(),
      avaliable: true,
    }

    this.cars.push(newCar)

    return newCar
  }
}
