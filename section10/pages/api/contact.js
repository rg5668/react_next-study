import { connectDatabase, insertDocument } from "../../helpers/db-util";

const handle = async (req, res) => {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    let client;
    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ message: "Connecting to the database failed" });
      return;
    }

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "양식 제대로 입력 안함" });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    let result;
    try {
      result = await insertDocument(client, "my-site", newMessage);
      newMessage.id = result.insertId;
    } catch (error) {
      res.status(500).json({ message: "Inserting comment failed!" });
      return;
    }
    client.close();
    res.status(201).json({ message: "Success", message: result });
  }
};

export default handle;
