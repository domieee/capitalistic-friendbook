import './config.js'
import { getDB } from './db.js'
import { ObjectId } from "mongodb"

const COL = 'friends'

import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

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

export const writePrompt = async (req, res) => {
    const response = await openai.createCompletion({
        model: "gpt-3.5-turbo",
        usage: { 'prompt_tokens': 56, 'completion_tokens': 31, 'total_tokens': 87 },
        choices: [
            {
                'message': {
                    'role': 'assistant',
                    'content': 'The 2020 World Series was played in Arlington, Texas at the Globe Life Field, which was the new home stadium for the Texas Rangers.'
                },
                'finish_reason': 'stop',
                'index': 0
            }
        ]
    });
    request.send(req)
    console.log(response.json())
}