import { MongoClient } from "mongodb";

export async function connectDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://kh:0000@cluster0.oydysfg.mongodb.net/my-site?retryWrites=true&w=majority"
  );

  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();
  const result = await db.collection(collection).insertOne(document);
  return result;
}
