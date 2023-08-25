import { Router } from 'express'
import { createCategoryController } from '../modules/cars/useCases/Category/createCategory'
import { listCategoriesController } from '../modules/cars/useCases/Category/listCategories'

const categoriesRoutes = Router()

categoriesRoutes.post('/', async (req, res) => {
  return createCategoryController.handle(req, res)
})

categoriesRoutes.get('/', async (req, res) => {
  return listCategoriesController.handle(req, res)
})

export { categoriesRoutes }
