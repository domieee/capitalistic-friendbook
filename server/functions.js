import './config.js'
import { getDB } from './db.js'
import { ObjectId } from "mongodb"

const COL = 'friends'

export const getData = async (req, res) => {
    try {
        const db = await getDB()
        const docs = await db.collection(COL).find({}).toArray()
        res.send(docs)
    } catch (err) {
        console.log(`Error reading data: ${err.message}`)
        res.end()
    }
}

export const pushFriend = async (req, res) => {
    try {
        console.log(req.body);
        const db = await getDB()
        await db.collection(COL).insertOne(req.body)
        const docs = await db.collection(COL).find({}).toArray()
        res.json(docs)
    } catch (err) {
        console.log(`Error writing entry: ${err.message}`);
        res.end()
    }
}

export const getFilterData = async (req, res) => {
    try {
        const db = await getDB()
        const docs = {
            company: await db.collection(COL).distinct('profile.company'),
            hardSkills: await db.collection(COL).distinct('profile.hardSkills'),
            softSkills: await db.collection(COL).distinct('profile.softSkills')
        }
        console.log(docs);
        res.send(docs)
    } catch (err) {
        console.log(err)
        res.end()
    }
}