import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDatabase } from "../../../lib/db";
import { verifyPassword } from "../../../lib/auth";

// NextAuth는 실행할 수 있는 함수로 만들어준다.
// 이 곳이 api 라우트이기 때문이다.
export default NextAuth({
  providers: [
    CredentialsProvider({
      // credentials: {
      // }
      session: {
        // authorize이 성공해 JSON Web Token이 생성되었는지 확인하려면 session으로 확인해야함.
        jwt: true,
      },
      //   로그인 요청을 수신할때 nextjs가 호출해 주는 메서드
      //   credentials는 우리가 제출 데이터가 있는 객체
      async authorize(credentials) {
        const client = await connectToDatabase();
        const usersCollection = client.db().collection("users");
        // 같은 이메일이 있는지 확인
        const user = await usersCollection.findOne({
          email: credentials.email,
        });

        // authorize 내부에서 에러가 발생하면 authorize가 생성한 프로미스를 거부하고 기본적으로 클라이언트를 다른(error) 페이지에 리디렉션한다.
        if (!user) {
          client.close();
          throw new Error("No user found!");
        }

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
          client.close();
          throw new Error("비밀번호 틀림");
        }

        client.close();
        // 웹토근 부호화
        return { email: user.email };
      },
    }),
  ],
});
