import { Category } from '../../../model/Category'
import { ICategoriesRepository } from '../../../repositories/Categories/ICategoriesRepository'

interface IRequest {
  name: string
  description: string
}

export class CreateCategoryUseCase {
  categoriesRepository: ICategoriesRepository
  constructor(categoriesRepository: ICategoriesRepository) {
    this.categoriesRepository = categoriesRepository
  }

  execute({ name, description }: IRequest): Category {
    const categoryAlreadyExists = !!this.categoriesRepository.findByName(name)

    if (categoryAlreadyExists) {
      throw new Error('Esta categoria já existe!')
    }

    const newCategory = this.categoriesRepository.create({ name, description })

    return newCategory
  }
}
