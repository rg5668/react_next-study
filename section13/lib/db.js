import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://kh:0000@cluster0.oydysfg.mongodb.net/auth-demo?retryWrites=true&w=majority"
  );

  return client;
}
