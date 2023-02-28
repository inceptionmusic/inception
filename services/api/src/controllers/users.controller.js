import userService from '../services/users.service'
import { controllerAction } from '../utils'

export const getUsers = controllerAction(async (req) => {
  const limit = parseInt(req.query.limit) || 20
  const page = parseInt(req.query.page) * limit || 0

  return await userService.getUsers(limit, page)
})

export const getUserById = controllerAction(async (req) => {
  return await userService.getUserById(req.params.id)
})

export default {
  getUsers,
  getUserById,
}
