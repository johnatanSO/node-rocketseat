import { Router } from 'express'
import { categoriesRoutes } from './categories'
import { specificationsRoutes } from './specifications'

const router = Router()

router.use('/categories', categoriesRoutes)
router.use('/specifications', specificationsRoutes)

export { router }
