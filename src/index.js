import express from 'express'

import { ServerConfig } from './config/index.js'

import { apiRoutes } from './routes/index.js'

const app = express()

app.use('/api', apiRoutes);

app.listen(ServerConfig, ()=> {
  console.log(`Server is running on ${ServerConfig}`)
})