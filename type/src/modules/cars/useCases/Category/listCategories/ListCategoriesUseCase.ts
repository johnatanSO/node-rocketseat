import { Category } from '../../../model/Category'
import { ICategoriesRepository } from '../../../repositories/Categories/ICategoriesRepository'

export class ListCategoriesUseCase {
  categoriesRepository: ICategoriesRepository
  constructor(categoriesRepository: ICategoriesRepository) {
    this.categoriesRepository = categoriesRepository
  }

  execute(): Category[] {
    const categories = this.categoriesRepository.list()
    return categories
  }
}
