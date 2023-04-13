import './config.js'
import { getDB } from './db.js'
import { ObjectId } from "mongodb"

const COL = 'friends'

export const getData = async (req, res) => {
    try {
        console.log('object', "asdasd");
        const db = await getDB()
        const docs = await db.collection(COL).find({}).toArray()
        console.log(docs);
        res.send(docs)
    } catch (err) {
        console.log(err);
        res.end()
    }
}