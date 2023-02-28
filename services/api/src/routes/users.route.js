import { Router } from 'express'
import { cache } from '../config/middleware'
import usersController from '../controllers/users.controller'

const router = Router()
router.use(cache(60 * 60))

router.get('/', usersController.getUsers)
router.get('/:id', usersController.getUserById)

export default router
