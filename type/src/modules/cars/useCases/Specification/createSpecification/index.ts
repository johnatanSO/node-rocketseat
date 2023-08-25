import { SpecificationsRepository } from './../../../repositories/Specifitacions/SpecificationsRepository'
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase'
import { CreateSpecificationController } from './CreateSpecificationController'

const specificationsRepository = SpecificationsRepository.getInstance()

const createSpecificationUseCase = new CreateSpecificationUseCase(
  specificationsRepository,
)

export const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseCase,
)
