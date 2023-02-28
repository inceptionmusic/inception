import config from '../config/config'
import { httpService } from '../utils'

const cms = config.services.cms

export const getTracks = httpService(async (limit, page) => {
  const { data } = await cms.get('/tracks', {
    params: {
      'pagination[page]': page,
      'pagination[limit]': limit,
    },
  })
  return data
})

export const getTrackById = httpService(async (id) => {
  const { data } = await cms.get('/tracks/' + id)
  return data
})

export default {
  getTracks,
  getTrackById,
}
