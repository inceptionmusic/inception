import app from './app'
import config from './config/config'

const server = app.listen(config.port, () => {
  let host = server.address()
  console.log(`
    Inception API gateway server\n
    Status: Started\n
    Environment: ${config.env}\n
    Host: ${host.address}:${host.port}\n
  `)
})

const exitHandler = () => {
  server.close(() => {
    console.log('Status: Closed')
    process.exit(1)
  })
}

const errorHandler = (error) => {
  console.error(error)
  exitHandler()
}

process.on('uncaughtException', errorHandler)
process.on('unhandledRejection', errorHandler)

process.on('SIGTERM', () => {
  console.log('SIGTERM received')
  server.close()
})
