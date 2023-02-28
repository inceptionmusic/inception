import config from './config'
import nodeCache from './cache'

// Cache middleware
export const cache = (ttl) => (req, res, next) => {
  if (config.env !== 'production') {
    next()
    return
  }
  // Get the key for the request
  const key = `__res__${req.originalUrl || req.url}`
  const cached = nodeCache.get(key)
  // If response is cached, send the response
  if (cached) {
    res.send(cached)
    return
  }
  // If not cached, cache the response before sending
  res.sendResponse = res.send
  res.send = (body) => {
    nodeCache.set(key, body, ttl)
    res.sendResponse(body)
  }
  next()
}

// Error handler middleware
// eslint-disable-next-line no-unused-vars
export const errorHandler = (err, _req, res, _next) => {
  const production = config.env === 'production'
  if (!production) console.error(err)
  res.status(err.status || 500).json({
    status: err.status || 500,
    message: err.message,
    ...(production ? {} : { stack: err.stack }),
  })
}
