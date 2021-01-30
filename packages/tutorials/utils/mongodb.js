import { MongoClient } from 'mongodb';

let uri = `mongodb+srv://${process.env.DATABASE_MONGODB_USERNAME}:${process.env.DATABASE_MONGODB_PASSWORD}@cluster0.khcn5.mongodb.net/${process.env.DATABASE_MONGODB_DBNAME}?retryWrites=true&w=majority`;
let dbName = process.env.DATABASE_MONGODB_DBNAME;

let cachedClient = null;
let cachedDb = null;

if (!uri) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env'
  );
}

if (!dbName) {
  throw new Error(
    'Please define the MONGODB_DBNAME environment variable inside .env'
  );
}

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = await client.db(dbName);

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}
