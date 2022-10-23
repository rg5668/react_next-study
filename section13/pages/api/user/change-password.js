import { getSession } from "next-auth/react";
import { hashPassword, verifyPassword } from "../../../lib/auth";
import { connectToDatabase } from "../../../lib/db";

// /api/user/change-password
async function handler(req, res) {
  if (req.method !== "PATCH") {
    return;
  }

  const session = await getSession({ req: req });
  // 401은 인증되지 않았다는 의미의 표준 상태 코드
  if (!session) {
    // 이 코드는 인증되지 않은 사용자의 API 라우트 접근을 막는다.
    res.status(401).json({ message: "인증되지 않음." });
    return;
  }

  //   [...nextauth]에서 이메일 객체를 반환하여서 사용자의 이메일을 가져올 수 있다.
  const userEmail = session.user.email;
  //   비밀번호 보내기 old, new
  const oldPassword = req.body.oldPassword;
  const newPassword = req.body.newPassword;

  const client = await connectToDatabase();
  const usersCollection = client.db().collection("users");

  //   db안에 이메일이 있는지 확인
  const user = await usersCollection.findOne({ email: userEmail });

  if (!user) {
    res.status(404).json({ message: "사용자를 찾을 수 없음." });
    client.close();
    return;
  }

  //   비밀번호를 가져온다(db)
  const currentPassword = user.password;
  //   두 개의 패스워드가 맞는지 확인. (로그인에서도 사용 입력과 기존과 맞는지)
  const passwordsAreEqual = await verifyPassword(oldPassword, currentPassword);
  if (!passwordsAreEqual) {
    res.status(422).json({ message: "기존 비밀번호가 맞지 않습니다." });
    client.close();
    return;
  }

  //   위에 조건이 끝난다면 비밀번호가 맞다는것이니 업데이트를 해준다. (mongodb에서 사용하는 자체 함수들임)
  // $set은 mongodb에서 update를 할때 사용되는 특수한 키다.
  const newHashedPassword = await hashPassword(newPassword);
  const result = await usersCollection.updateOne(
    { email: userEmail },
    { $set: { password: newHashedPassword } }
  );

  client.close();
  res.status(200).json({ message: "Password updated!" });
}

export default handler;
