import { Category } from '../../model/Category'
import { ICategoriesRepository } from './ICategoriesRepository'

export default class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[]
  // eslint-disable-next-line no-use-before-define
  private static INSTANCE: CategoriesRepository

  private constructor() {
    this.categories = []
  }

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository()
    }
    return CategoriesRepository.INSTANCE
  }

  create(category: Category): void {
    this.categories.push(category)
  }

  list(): Category[] {
    return this.categories
  }

  findByName(name: string): Category | undefined {
    const category = this.categories.find((category) => category.name === name)
    return category
  }
}
