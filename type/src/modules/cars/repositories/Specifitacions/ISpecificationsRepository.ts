import { Specification } from '../../infra/mongoose/entities/Specification'

export interface ICreateSpecificationDTO {
  name: string
  description: string
}

export interface ISpecificationRepository {
  create({ name, description }: ICreateSpecificationDTO): Promise<Specification>
  list(): Promise<Specification[]>
  findByName(name: string): Promise<Specification>
}
