import { hash, compare } from "bcryptjs";

// 비밀번호 암호화 작업
export async function hashPassword(password) {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
}

// 로그인할때 비밀번호가 암호화가 되어 있기 때문에 compare를 사용하면 암호화된 비밀번호와 텍스트 비밀번호가 맞는지 확인해준다.
export async function verifyPassword(password, hashedPassword) {
  const isValid = await compare(password, hashedPassword);
  // 성공 여부를 boolean
  return isValid;
}
