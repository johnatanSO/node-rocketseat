import { CreateCategoryController } from './CreateCategoryController'
import CategoriesRepository from '../../../repositories/Categories/CategoriesRepository'
import { CreateCategoryUseCase } from './CreateCategoryUseCase'

const categoriesRepository = CategoriesRepository.getInstance()

const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository)

export const createCategoryController = new CreateCategoryController(
  createCategoryUseCase,
)
