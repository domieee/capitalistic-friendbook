import express from 'express'
import cors from 'cors'
import {
    getData,
    pushFriend,
    getFilterData
} from './functions.js'

// https://api.json-generator.com/templates/7FvD4gGfrFMl/data

const app = express()
const PORT = process.env.PORT || FALLBACK_PORT

app.use(cors({ origin: process.env.FRONTEND_URL }))

app.use(express.json())

app.get('/', getData)

app.post('/editor/send', pushFriend)

app.get('/filter', getFilterData)

app.listen(PORT, () => console.log(`Server listening on ${PORT}`))
// midqcIOraLU26cG0qpVgHRGZuUlpMS5lEn78pQmZ3YJ4ltp2fV6yEN38