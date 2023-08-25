import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from '../../../repositories/Specifitacions/ISpecificationsRepository'

export class CreateSpecificationUseCase {
  specificationsRepository: ISpecificationRepository
  constructor(specificationsRepository: ISpecificationRepository) {
    this.specificationsRepository = specificationsRepository
  }

  execute({ name, description }: ICreateSpecificationDTO) {
    const alreadyExistSpecification =
      !!this.specificationsRepository.findByName(name)

    if (alreadyExistSpecification)
      throw new Error('Já existe uma especificação com este nome')

    return this.specificationsRepository.create({ name, description })
  }
}
