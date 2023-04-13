import { MongoClient } from 'mongodb'

const URI = process.env.MONGOURI
const DB = process.env.MONGODB

const client = new MongoClient(URI)
let db

export const getDB = async () => {
    if (db) return db
    else {
        await client.connect()
        db = client.db(DB)
        return db
    }
}