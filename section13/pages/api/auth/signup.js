import { hashPassword } from "../../../lib/auth";
import { connectToDatabase } from "../../../lib/db";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const { email, password } = data;

    if (
      !email ||
      !email.includes("@") ||
      !password ||
      password.trim().length < 7
    ) {
      res.status(422).json({
        message: "유효하지 않은 입력 값 (이메일 @, 비밀번호 7자리 이상)",
      });
      return;
    }

    const client = await connectToDatabase();
    const db = client.db();

    // db에 같은 이메일을 사용하는지 확인
    // 못찾으면 undefined가 되고 찾으면 객체로 반환
    const existingUser = await db.collection("users").findOne({ email: email });
    if (existingUser) {
      res
        .status(422)
        .json({ message: "같은 이메일을 사용하는 사용자가 있음." });
      client.close();
      return;
    }

    const hashedPassword = await hashPassword(password);

    const result = await db.collection("users").insertOne({
      email: email,
      // 회원을 저장할때 비밀번호를 그대로 저장하지 않고 암호화를 하는데 bcryptjs 패키지를 사용해 암호화를 한다. (어떠한 데이터도 다 암호화가 된다.)
      // lib/auth.js에서 처리함.
      password: hashedPassword,
    });

    res.status(201).json({ message: "Created user!", result });
    client.close();
  }
}

export default handler;
