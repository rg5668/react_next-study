import classes from "./post-content.module.css";
import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";

// const DUMMY_POSTS = {
//   title: "Getting Started with NextJS",
//   slug: "getting-started-with-nextjs",
//   image: "getting-started-nextjs.png",
//   date: "2022-02-10",
//   content: "# This is a first post",
// };

const PostContent = (props) => {
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
