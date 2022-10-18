import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";

const DUMMY_POSTS = [
  {
    title: "Getting Started with NextJS",
    slug: "getting-started-with-nextjs",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is a the React framework for production - it building fullstack.",
    date: "2022-02-10",
  },
  {
    title: "Getting Started with NextJS",
    slug: "getting-started-with-nextjs2",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is a the React framework for production - it building fullstack.",
    date: "2022-02-10",
  },
  {
    title: "Getting Started with NextJS",
    slug: "getting-started-with-nextjs3",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is a the React framework for production - it building fullstack.",
    date: "2022-02-10",
  },
  {
    title: "Getting Started with NextJS",
    slug: "getting-started-with-nextjs4",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is a the React framework for production - it building fullstack.",
    date: "2022-02-10",
  },
];

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
};

export default HomePage;

//1) Hero (환영 섹션으로 주로 상품을 소개)
//2) 포스트 (게시물)
