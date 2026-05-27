import express from 'express'

import { ServerConfig } from './config/index.js'

import { apiRoutes } from './routes/index.js'

import db from './models/index.cjs'
import { where } from 'sequelize';
const { City, Airport } = db;

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api', apiRoutes);

app.listen(ServerConfig, async ()=> {
  console.log(`Server is running on ${ServerConfig}`)
  // bad code alert
  // const bengaluru = await City.findByPk(1);
  // console.log(bengaluru)

  // const airport = await Airport.create({name: 'Kempegowda Airport', code:'BLR' })
  // const kmpairport = await bengaluru.createAirport({name: 'Kempegowda Airport', code: 'BLR'})
  // console.log(kmpairport)

  // const hblairport = await bengaluru.createAirport({name: 'Hubbali Airport', code: 'HBL'})
  // const hblairport = await Airport.findByPk(2)
  // console.log(hblairport)

  // await City.destroy({
  //   where: {
  //     id: 1
  //   }
  // })

  // const city = await City.findByPk(4);
  // await city.createAirport({ name: 'Indore Airport', code: 'IND'})

  await City.destroy({
    where: {
      id: 20
    }
  })
})