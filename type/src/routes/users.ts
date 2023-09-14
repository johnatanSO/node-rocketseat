import { CreateNewUserController } from '../modules/accounts/useCases/User/createNewUser/CreateNewUserController'
import { Router } from 'express'

const usersRoutes = Router()
const createNewUserController = new CreateNewUserController()

usersRoutes.post('/', createNewUserController.handle)

export { usersRoutes }
