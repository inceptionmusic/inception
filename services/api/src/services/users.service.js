import config from '../config/config'
import { httpService } from '../utils'

const cms = config.services.cms

export const getUsers = httpService(async (limit, page) => {
  const { data } = await cms.get('/users', {
    params: {
      'pagination[page]': page,
      'pagination[limit]': limit,
    },
  })
  return data
})

export const getUserById = httpService(async (id) => {
  const { data } = await cms.get('/users/' + id)
  return data
})

export default {
  getUsers,
  getUserById,
}
