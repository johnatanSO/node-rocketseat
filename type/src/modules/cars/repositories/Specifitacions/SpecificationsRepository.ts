import { Specification } from '../../entities/Specification'
import {
  ISpecificationRepository,
  ICreateSpecificationDTO,
} from './ISpecificationsRepository'

export class SpecificationsRepository implements ISpecificationRepository {
  private specifications: Specification[]
  // eslint-disable-next-line no-use-before-define
  private static INSTANTE: SpecificationsRepository

  private constructor() {
    this.specifications = []
  }

  public static getInstance(): SpecificationsRepository {
    if (!SpecificationsRepository.INSTANTE) {
      SpecificationsRepository.INSTANTE = new SpecificationsRepository()
    }
    return SpecificationsRepository.INSTANTE
  }

  create({ name, description }: ICreateSpecificationDTO) {
    const specification = new Specification({ name, description })
    this.specifications.push(specification)

    return specification
  }

  list() {
    return this.specifications
  }

  findByName(name: string): Specification {
    return this.specifications.find(
      (specification) => specification.name === name,
    )
  }
}
