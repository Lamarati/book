import { MongoClient } from "mongodb"

import parentDebug from 'debug'
import { handleError } from "../utils/error.js";

const debug = parentDebug('book:connect');

export default async function connectToMongoDb(uri) {
    try {
        const client = new MongoClient(uri);
        await client.connect();

        await client.db("admin").command({ ping: 1 });

        debug('Connected succesfullly to Mongo on URI', uri)

        client.on('close', () => {
            debug('Closing mongo client')
            client.close()
        });

        client.on('error', (error) => {
            debug('Error on mongo client')
            handleError(error)
        })
    } catch (error) {
        handleError(error);
    }
}