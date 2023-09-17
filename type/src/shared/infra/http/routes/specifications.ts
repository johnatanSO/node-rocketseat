import { Router } from 'express'
import { CreateSpecificationController } from '../../../../modules/cars/useCases/Specification/createSpecification/CreateSpecificationController'
import { listSpecificationsController } from '../../../../modules/cars/useCases/Specification/listSpecifications'

const specificationsRoutes = Router()
const createSpecificationController = new CreateSpecificationController()

specificationsRoutes.post('/', createSpecificationController.handle)

specificationsRoutes.get('/', async (req, res) => {
  return listSpecificationsController.handle(req, res)
})

export { specificationsRoutes }
