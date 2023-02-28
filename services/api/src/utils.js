import createError from 'http-errors'

// prettier-ignore
export const httpService = (service) => async (...args) => {
  try {
    return await service(...args)
  } catch (error) {
    throw error.response
      ? createError(error.response.status, error.response.statusText)
      : createError(500, error.message)
  }
}

// prettier-ignore
export const controllerAction = (action) => async (req, res, next) => {
  try {
    const data = await action(req, res, next)
    res.json(data)
  } catch (error) {
    next(error)
  }
}

export const clamp = (n, min, max) => Math.min(Math.max(n, min), max)
