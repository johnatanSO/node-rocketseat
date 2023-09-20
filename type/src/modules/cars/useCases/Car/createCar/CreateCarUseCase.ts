import { Types } from 'mongoose'
import { inject, injectable } from 'tsyringe'
import { Car } from '../../../infra/mongoose/entities/Car'
import { ICarsRepository } from '../../../repositories/Cars/ICarsRepository'

interface IRequest {
  name: string
  description: string
  dailyRate: number
  licensePlate: string
  fineAmount: number
  brand: string
  categoryId: string | Types.ObjectId
}

@injectable()
export class CreateCarUseCase {
  carsRepository: ICarsRepository
  constructor(@inject('CarsReposistory') carsRepository: ICarsRepository) {
    this.carsRepository = carsRepository
  }

  async execute({
    name,
    description,
    dailyRate,
    licensePlate,
    fineAmount,
    brand,
    categoryId,
  }: IRequest): Promise<Car> {
    const newCar = await this.carsRepository.create({
      name,
      description,
      dailyRate,
      licensePlate,
      fineAmount,
      brand,
      categoryId,
    })

    return newCar
  }
}
