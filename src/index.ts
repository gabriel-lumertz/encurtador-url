import { URLcontroller } from './controller/URLcontroller'
import express from 'express'
import { MongoConnection } from './database/MongoConnection'

const api = express()
api.use(express.json())

const database = new MongoConnection()
database.connect()

const urlcontroller = new URLcontroller()

api.post('/shorten', urlcontroller.shorten)
api.get('/:hash', urlcontroller.redirect)

api.listen(3000, () => console.log('Express listening'))