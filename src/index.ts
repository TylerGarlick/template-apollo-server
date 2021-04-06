import server from './server'

const { PORT } = process.env

server.listen(PORT)
      .then((server) => {
        console.log(`Server started: ${server.url}`)
      })