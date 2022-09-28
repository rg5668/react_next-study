import { Fragment } from "react";
import path from "path";
import fs from "fs/promises";

function ProductDetailPage(props) {
  const { loadedProduct } = props;

  return (
    <Fragment>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </Fragment>
  );
}

export default ProductDetailPage;

export async function getStaticProps(context) {
  //params(매개변수)는 키-값 쌍이 있는 객체이며 키의 식별자는 동적 매개변수
  const { params } = context;
  //pid값을 가져옴
  const productId = params.pid;
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  //fs는 노드 모듈로 클라이언트측에서 보이지 않음 (렌더링 된 후 사라짐) 실 보여지는 코드만 보여짐
  //데이터 읽어옴
  const jsonData = await fs.readFile(filePath);
  //parse를 통해 자바스크립트 일반 객체로 변환
  const data = JSON.parse(jsonData);

  const product = data.products.find((product) => product.id === productId);

  return {
    props: {
      loadedProduct: product,
    },
  };
}
