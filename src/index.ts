import server from './server'

const { PORT } = process.env || 4000


server.listen(PORT)
  .then(({ url }) => {
    console.log(`Server started: ${url}`)
    console.log(
      `Try your health check at: ${url}.well-known/apollo/server-health`,
    )
  })
