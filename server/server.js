import express from 'express'
import cors from 'cors'
import { getData } from './functions.js'

const app = express()
const PORT = process.env.PORT || FALLBACK_PORT

app.use(cors({ origin: process.env.FRONTEND_URL }))

app.use(express.json())

app.get('/', getData)

app.listen(PORT, () => console.log(`Server listening on ${PORT}`))