import app from './app'
import config from './config/config'
import console from './config/console'

const server = app.listen(config.port, async () => {
  let host = server.address()
  host.address = host.address === '::' ? 'localhost' : host.address

  console.log('\nServer listening on:')
  await console.draw(`http://${host.address}:${host.port}`)

  console.log('\nAdditional information:')
  await console.draw([
    ['Environment', config.env],
    ['Version', `node ${process.version}`],
    ['Started in', `${(process.uptime() * 1000).toFixed(0)} ms`],
    ['Process PID', process.pid],
  ])
})

const exitHandler = () => {
  server.close(() => {
    console.log('Server Closed')
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
