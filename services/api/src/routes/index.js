import { Router } from 'express'

import usersRoute from './users.route'
import tracksRoute from './tracks.route'

const routes = [
  {
    path: '/users',
    controller: usersRoute,
  },
  {
    path: '/tracks',
    controller: tracksRoute,
  },
]

const router = Router()

routes.forEach((route) => {
  router.use(route.path, route.controller)
})

export default router
