import trackService from '../services/tracks.service'
import { controllerAction } from '../utils'

export const getTracks = controllerAction(async (req) => {
  const limit = parseInt(req.query.limit) || 20
  const page = parseInt(req.query.page) * limit || 0

  return await trackService.getTracks({ limit, page })
})

export const getTrackById = controllerAction(async (req) => {
  return await trackService.getTrackById(req.params.id)
})

export default {
  getTracks,
  getTrackById,
}
