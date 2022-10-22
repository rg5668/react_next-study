import { useState } from "react";
import classes from "./auth-form.module.css";
// [nextauth] 작성하고 api 호출할때 임포트(로그인)
import { signIn } from "next-auth/react";

async function createUser(email, password) {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "가입 실패");
  }
  return data;
}

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  function handleOnChangeInput(e) {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  }

  async function submitHandler(event) {
    event.preventDefault();

    if (isLogin) {
      //로그인 페이지인지 확인
      //   credentials에서 로그인에 실패하면 자동적으로 error페이지 이동한다. redirect는 페이지 이동을 방지하기 위해 f
      // 변수를 만들어 넣으면 백엔드에서 거절해도 에러 자체를 반환하지 않아 거절되는 일이 없다. (result로 반환되는 객체의 내용만 달라진다.)

      const result = await signIn("credentials", {
        redirect: false,
        email: userData.email,
        password: userData.password,
      });
      console.log(result);
    } else {
      //회원가입
      try {
        const result = await createUser(userData.email, userData.password);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleOnChangeInput}
            required
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={userData.password}
            onChange={handleOnChangeInput}
            required
          />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? "Login" : "Create Account"}</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;
