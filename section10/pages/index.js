import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/posts-util";

// const DUMMY_POSTS = [
//   {
//     title: "Getting Started with NextJS",
//     slug: "getting-started-with-nextjs",
//     image: "getting-started-nextjs.png",
//     excerpt:
//       "NextJS is a the React framework for production - it building fullstack.",
//     date: "2022-02-10",
//   },
//   {
//     title: "Getting Started with NextJS",
//     slug: "getting-started-with-nextjs2",
//     image: "getting-started-nextjs.png",
//     excerpt:
//       "NextJS is a the React framework for production - it building fullstack.",
//     date: "2022-02-10",
//   },
//   {
//     title: "Getting Started with NextJS",
//     slug: "getting-started-with-nextjs3",
//     image: "getting-started-nextjs.png",
//     excerpt:
//       "NextJS is a the React framework for production - it building fullstack.",
//     date: "2022-02-10",
//   },
//   {
//     title: "Getting Started with NextJS",
//     slug: "getting-started-with-nextjs4",
//     image: "getting-started-nextjs.png",
//     excerpt:
//       "NextJS is a the React framework for production - it building fullstack.",
//     date: "2022-02-10",
//   },
// ];

//1) Hero (환영 섹션으로 주로 상품을 소개)
//2) 포스트 (게시물)

const HomePage = (props) => {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
};

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    // revalidate를 사용하면 데이터가 바뀌더라도 재구축이나 재배포 없이 최신 데이터가 반영된다.
    revalidate: 60,
  };
};

export default HomePage;
