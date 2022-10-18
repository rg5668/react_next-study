import Link from "next/link";
import classes from "./main-navigation.module.css";
import Logo from "./logo";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <Link href="/">
        <a>
          {/* 중요!!! Link 태그 안에 (일반 텍스트 제외) 태그를 사용하면 a 태그의 추가에 대해 알려줘야 한다. */}
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
