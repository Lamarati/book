import connectToMongoDb from "./connect.js";

export const database = {};

export async function createMongoClient() {
    const client = await connectToMongoDb(process.env.MONGO_URL);

    Object.defineProperty(database, 'client', {
        writable: false,
        value: client,
        enumerable: true,
    })
}
