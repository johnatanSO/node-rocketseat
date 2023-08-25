import { Router } from 'express'
import { createSpecificationController } from '../modules/cars/useCases/Specification/createSpecification'
import { listSpecificationsController } from '../modules/cars/useCases/Specification/listSpecifications'

const specificationsRoutes = Router()

specificationsRoutes.post('/', async (req, res) => {
  return createSpecificationController.handle(req, res)
})

specificationsRoutes.get('/', async (req, res) => {
  return listSpecificationsController.handle(req, res)
})

export { specificationsRoutes }
