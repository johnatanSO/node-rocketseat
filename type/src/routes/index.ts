import { Router } from 'express'
import { categoriesRoutes } from './categories'
import { specificationsRoutes } from './specifications'
import { usersRoutes } from './users'

const router = Router()

router.use('/categories', categoriesRoutes)
router.use('/specifications', specificationsRoutes)
router.use('/users', usersRoutes)

export { router }
