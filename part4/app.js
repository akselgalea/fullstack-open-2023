const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const logger = require('./utils/logger')
const { requestLogger, errorHandler, unknownEndpoint } = require('./utils/middleware')
const blogRouter = require('./controllers/blog')

app.disable('x-powered-by')

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.json())

app.use(requestLogger)

app.use('/api/blogs', blogRouter)

app.use(unknownEndpoint)
app.use(errorHandler)

app.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})
