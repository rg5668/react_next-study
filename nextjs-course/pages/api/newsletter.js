import { connectDatabase, insertDocument } from "../../helpers/db-util";

// async function connectDatabase() {
//   const client = await MongoClient.connect(
//     "mongodb+srv://kh:0000@cluster0.oydysfg.mongodb.net/events?retryWrites=true&w=majority"
//   );

//   return client;
// }

// async function insertDocument(client, document) {
//   const db = client.db();
//   await db.collection("newsletter").insertOne(document);
// }

async function handle(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      // 사용자 입력값이 유효하지 않을 때를 나타내는 상태 코드
      res.status(422).json({ message: "Invalid email address." });
      return;
    }

    // function으로 빼기.
    // const client = await MongoClient.connect(
    //   "mongodb+srv://kh:0000@cluster0.oydysfg.mongodb.net/events?retryWrites=true&w=majority"
    // );
    // const db = client.db();
    // await db.collection("newsletter").insertOne({ email: userEmail });

    let client;

    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ message: "Connection to the Database failed" });
      return;
    }

    try {
      await insertDocument(client, "newsletter", { email: userEmail });
      client.close();
    } catch (error) {
      res.status(500).json({ message: "Inserting to the Database failed" });
      return;
    }
    client.close();

    res.status(201).json({ message: "Signed Up" });
  }
}

export default handle;
