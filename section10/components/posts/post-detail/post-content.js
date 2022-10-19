import classes from "./post-content.module.css";
import PostHeader from "./post-header";
import Image from "next/image";
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

  // const customRenderers = {
  //   // image(image) {
  //   //   return (
  //   //     <Image
  //   //       src={`/images/posts/${post.slug}/${image.src}`}
  //   //       alt={image.alt}
  //   //       width={600}
  //   //       height={300}
  //   //       // layout="responsive"
  //   //     />
  //   //   );
  //   // },
  //   // paragraph(paragraph) {
  //   //   const { node } = paragraph;
  //   //   if (node.children[0].type === "image") {
  //   //     const image = node.children[0];
  //   //     return (
  //   //       <div className={classes.Image}>
  //   //         <Image
  //   //           src={`/images/posts/${post.slug}/${image.url}`}
  //   //           alt={image.alt}
  //   //           width={600}
  //   //           height={300}
  //   //           // layout="responsive"
  //   //         />
  //   //       </div>
  //   //     );
  //   //   }
  //   //   return <p>{paragraph.children}</p>;
  //   // },
  //   // code(code) {
  //   //   const { language, value } = code;
  //   //   return (
  //   //     <SyntaxHighlighter
  //   //       style={atomDark}
  //   //       language={language}
  //   //       children={value}
  //   //     ></SyntaxHighlighter>
  //   //   );
  //   // },
  // };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
};
export default PostContent;

// 특정 요소를 렌더링하는 방식을 오버라이드에서 하기 위해서는 컴포넌트 markdown에서 renderers라는 프로퍼티가 필요.
// ![Create routes via your file + folder structure](/images/posts/getting-started-with-nextjs/nextjs-file-based-routing.png)
