import {
  connectDatabase,
  getAllDocuments,
  insertDocument,
} from "../../../helpers/db-util";

async function handle(req, res) {
  const eventId = req.query.eventId;

  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: "Connecting to the database failed" });
    return;
  }

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
      client.close();
    }

    const newComment = {
      email,
      name,
      text,
      eventId,
    };
    // MongoDB에서 자동으로 부여되는 아이디를 newComment객체에 넣기.

    let result;
    try {
      result = await insertDocument(client, "comments", newComment);
    } catch (error) {
      res.status(500).json({ message: "Inserting comment failed!" });
      return;
    }

    newComment._id = result.insertId;
    res.status(201).json({ message: "Added Comment.", comment: newComment });
  }

  if (req.method === "GET") {
    // const dummyList = [
    //   { id: "c1", name: "Max", text: "A first comment!" },
    //   { id: "c2", name: "Max2", text: "A second comment!" },
    // ];
    // const db = client.db();
    // const documents = await db
    //   .collection("comments")
    //   //   전체 다 불러오기
    //   .find()
    //   //   선택한 아이디만 선택
    //   .filter({ eventId })
    //   //   정렬
    //   .sort({ _id: -1 })
    //   .toArray();

    try {
      const documents = await getAllDocuments(
        client,
        "comments",
        { eventId },
        {
          _id: -1,
        }
      );
      res.status(200).json({ comments: documents });
    } catch (error) {
      res.status(500).json({ message: "getAll Data failed!" });
    }
  }

  client.close();
}

export default handle;
