import { Specification } from '../../../entities/Specification'
import { SpecificationsRepository } from './../../../repositories/Specifitacions/SpecificationsRepository'

export class ListSpecificationsUseCase {
  specificationsRepository: SpecificationsRepository
  constructor(specificationsRepository: SpecificationsRepository) {
    this.specificationsRepository = specificationsRepository
  }

  execute(): Specification[] {
    return this.specificationsRepository.list()
  }
}
