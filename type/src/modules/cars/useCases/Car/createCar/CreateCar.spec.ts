import { MockCarsRepository } from './../../../repositories/Cars/MockCarsRepository'
import 'reflect-metadata'
import { Types } from 'mongoose'
import { CreateCarUseCase } from './CreateCarUseCase'

let mockCarsRepository: MockCarsRepository

let createCarUseCase: CreateCarUseCase

describe('Create car', () => {
  beforeEach(() => {
    mockCarsRepository = new MockCarsRepository()

    createCarUseCase = new CreateCarUseCase(mockCarsRepository)
  })

  it('Should be ale create a new car', async () => {
    const newCar = await createCarUseCase.execute({
      name: 'Name car',
      description: 'Description car',
      dailyRate: 100,
      licensePlate: 'ABC-1234',
      fineAmount: 60,
      brand: 'Brand',
      categoryId: new Types.ObjectId(),
    })

    console.log('newCar', newCar)
    expect(newCar).toHaveProperty('_id')
  })
})
