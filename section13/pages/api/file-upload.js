import { connectToDatabase, insertDocument } from "../../lib/db";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const { file } = data;
    console.log(file);

    const client = await connectToDatabase();
    const db = client.db();

    const result = await db.collection("file").insertOne({
      file: file,
    });

    client.close();
    res.status(201).json({ message: "Success", result });
  }
}

export default handler;
