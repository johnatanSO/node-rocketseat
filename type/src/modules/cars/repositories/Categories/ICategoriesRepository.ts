import { Category } from '../../model/Category'

export interface ICategoriesRepository {
  create(category: Category): void
  list(): Category[]
  findByName(name: string): Category | undefined
}
