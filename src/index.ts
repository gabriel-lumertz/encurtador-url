import { URLcontroller } from './controller/URLcontroller'
import express, { Request, Response } from 'express'

const api = express()
api.use(express.json())

const urlcontroller = new URLcontroller()

api.post('/shorten', urlcontroller.shorten)
api.get('/:hash', urlcontroller.redirect)

api.listen(3000, () => console.log('Express listening'))