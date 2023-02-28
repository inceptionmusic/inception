import { Router } from 'express'
import { cache } from '../config/middleware'
import tracksController from '../controllers/tracks.controller'

const router = Router()
router.use(cache(60 * 60))

router.get('/', tracksController.getTracks)
router.get('/:id', tracksController.getTrackById)

export default router
