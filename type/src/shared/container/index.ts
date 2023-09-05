import { container } from 'tsyringe'
import CategoriesRepository from '../../modules/cars/repositories/Categories/CategoriesRepository'
import { ICategoriesRepository } from '../../modules/cars/repositories/Categories/ICategoriesRepository'
import { ISpecificationRepository } from '../../modules/cars/repositories/Specifitacions/ISpecificationsRepository'
import { SpecificationsRepository } from '../../modules/cars/repositories/Specifitacions/SpecificationsRepository'

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
)

container.registerSingleton<ISpecificationRepository>(
  'SpecificationsRepository',
  SpecificationsRepository,
)
