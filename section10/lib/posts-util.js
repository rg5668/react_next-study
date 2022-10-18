import fs from "fs";
import path from "path";
import matter from "gray-matter";

// 절대 경로 설정
const postsDirectory = path.join(process.cwd(), "posts");

export const getPostsFiles = () => {
  return fs.readdirSync(postsDirectory);
};

export const getPostData = (postIdentifier) => {
  const postSlug = postIdentifier.replace(/\.md$/, "");
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  //   matter를 사용하면 2개의 프로퍼티 반환하는데 파일을 자바스크립트 객체와, 마크다운 텍스트를 문자열로 바꿔준다.
  const { data, content } = matter(fileContent);

  //   slug를 추출하기 위해 파일 확장자명 삭제
  // const postSlug = fileName.replace(/\.md$/, "");

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
};

export const getAllPosts = () => {
  // readdirSync는 모든 콘텐츠를 동기식으로 읽어 들이는데 블로그에서는 괜찮은 방법
  const postFiles = getPostsFiles();

  //   모든 데이터 가져오기
  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  //   정렬
  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
};

export const getFeaturedPosts = () => {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
};
