import { Category } from '../../entities/Category'

export interface ICreateCategoryDTO {
  name: string
  description: string
}

export interface ICategoriesRepository {
  create(category: ICreateCategoryDTO): Promise<Category>
  list(): Promise<Category[]>
  findByName(name: string): Promise<Category | null>
}
