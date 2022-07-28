const server = require('./src/app')

server.listen(process.env.PORT || 3001, () => {
  console.log('Server listening on port 3001')
})
