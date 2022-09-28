import path from "path";
import fs from "fs/promises";
import Link from "next/link";

function HomePage(props) {
  const { products } = props;

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default HomePage;

//getStaticProps는 사전 렌더링할때 사용?
export async function getStaticProps(context) {
  //process.cwd()는 현재 경로, 그 다음 경로 (절대경로)
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  //fs는 노드 모듈로 클라이언트측에서 보이지 않음 (렌더링 된 후 사라짐) 실 보여지는 코드만 보여짐
  //데이터 읽어옴
  const jsonData = await fs.readFile(filePath);
  //parse를 통해 자바스크립트 일반 객체로 변환
  const data = JSON.parse(jsonData);

  if (data.products.length === 0) {
    return { notFound: true };
  }

  if (!data) {
    return {
      redirect: {
        destination: "/404",
      },
    };
  }

  return {
    props: {
      products: data.products,
    },
    // 10초마다 페이지를 재생성
    // 10초 안에는 새로고침을 해도 재생성하지 않음
    revalidate: 10,
    // true하면 404error
    // notFound: true,
    //데이터 페칭에 실패할 경우 사용자를 다른 경로로 이동시키는것
    // redirect: '/404'
  };
}
