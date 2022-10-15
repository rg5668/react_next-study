import { MongoClient } from "mongodb";

async function handle(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      // 사용자 입력값이 유효하지 않을 때를 나타내는 상태 코드
      res.status(422).json({ massage: "Invalid email address." });
      return;
    }

    const client = await MongoClient.connect(
      "mongodb+srv://kh:0000@cluster0.oydysfg.mongodb.net/events?retryWrites=true&w=majority"
    );
    const db = client.db();
    await db.collection("newsletter").insertOne({ email: userEmail });
    client.close;

    res.status(201).json({ massage: "Signed Up" });
  }
}

export default handle;
