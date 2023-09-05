import 'reflect-metadata'
import express, { Express } from 'express'
import { router } from './routes'
import cors from 'cors'
import dbConnection from '../src/database'
import './shared/container'

interface CustomExpress extends Express {
  mongo?: any
}

const app: CustomExpress = express()
app.mongo = dbConnection

app.use(express.json())
app.use(cors())
app.use(router)

app.listen(3333, () => {
  console.log('Server is running!')
})
app.get('/', (req, res) => {
  res.send('Hello world')
})
