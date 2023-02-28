import express, { json, urlencoded } from 'express'
import helmet from 'helmet'
import xss from 'xss-clean'
import cors from 'cors'
import compression from 'compression'
import morgan from 'morgan'
import createError from 'http-errors'

import { errorHandler } from './config/middleware'
import config from './config/config'
import routes from './routes'

const app = express()

// Set security HTTP headers
app.use(helmet())
// Parse JSON request bodies
app.use(json())
// Parse URL-encoded request bodies
app.use(urlencoded({ extended: true }))
// Sanitize request data
app.use(xss())
// Enable CORS
app.use(cors())
// Compress responses
app.use(compression())
// HTTP request logger
app.use(morgan(config.env === 'production' ? 'short' : 'dev'))

// API routes
app.use('/', routes)

// Catch 404 errors
app.use((_req, _res, next) => {
  next(createError(404, 'Not found'))
})

// Error handler
app.use(errorHandler)

export default app
