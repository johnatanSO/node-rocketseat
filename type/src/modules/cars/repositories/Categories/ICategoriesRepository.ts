import { Category } from '../../model/Category'

export interface ICreateCategoryDTO {
  name: string
  description: string
}

export interface ICategoriesRepository {
  create(category: Category): Category
  list(): Category[]
  findByName(name: string): Category | undefined
}
