import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

import classes from "./main-navigation.module.css";

function MainNavigation() {
  const { data, status } = useSession();

  // // 세션 데이터 객체
  console.log(data);
  // // 세션 상태값 loading, authenticated(인증)
  console.log(status);

  // 로그아웃은 이 한줄만 추가해주면 쿠키와 세션정보가 다 날라간다.
  function logoutHandler() {
    signOut();
  }

  return (
    <header className={classes.header}>
      <Link href="/">
        <a>
          <div className={classes.logo}>Next Auth</div>
        </a>
      </Link>
      <nav>
        <ul>
          {!data && status !== "authenticated" && (
            <li>
              <Link href="/auth">Login</Link>
            </li>
          )}

          {data && (
            <li>
              <Link href="/profile">Profile</Link>
            </li>
          )}

          {data && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
