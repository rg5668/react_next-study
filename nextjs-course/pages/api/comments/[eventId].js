import { MongoClient } from "mongodb";

async function handle(req, res) {
  const eventId = req.query.eventId;

  const client = await MongoClient.connect(
    "mongodb+srv://kh:0000@cluster0.oydysfg.mongodb.net/events?retryWrites=true&w=majority"
  );

  if (req.method === "POST") {
    const { email, name, text } = req.body;

    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    const newComment = {
      email,
      name,
      text,
      eventId,
    };

    const db = client.db();
    const result = await db.collection("comments").insertOne(newComment);

    // console.log(result);
    newComment.id = result.insertedId;
    // console.log(newComment);
    res.status(201).json({ message: "Added Comment.", comment: newComment });
  }

  if (req.method === "GET") {
    // const dummyList = [
    //   { id: "c1", name: "Max", text: "A first comment!" },
    //   { id: "c2", name: "Max2", text: "A second comment!" },
    // ];
    const db = client.db();
    const documents = await db
      .collection("comments")
      //   전체 다 불러오기
      .find()
      //   선택한 아이디만 선택
      .filter({ eventId })
      //   정렬
      .sort({ _id: -1 })
      .toArray();

    res.status(200).json({ comments: documents });
  }

  client.close;
}

export default handle;

// export async function getAllDocuments(client, collection, sort, filter = {}) { ... }
