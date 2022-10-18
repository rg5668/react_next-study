import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../lib/posts-util";

const PostDetailPage = (props) => {
  return <PostContent post={props.post} />;
};

// getStaticProps를 동적으로 사용하기 위해 context를 사용하는데 미리 생성해야하는 slug를 위해 getStaticPaths를 사용해야한다.
export const getStaticProps = (context) => {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
};

// paths를 빈 배열로 둘 수 있다.
//fallback t로 하면 렌더링 blocking을 설정하면 게시물이 뜰 때까지 기다릴수도 있다.
// 경로 미리 생성
export const getStaticPaths = () => {
  const postFilenames = getPostsFiles();
  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: true,
  };
};

export default PostDetailPage;
