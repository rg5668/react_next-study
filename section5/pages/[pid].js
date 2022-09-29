import { Fragment } from "react";
import path from "path";
import fs from "fs/promises";

function ProductDetailPage(props) {
  const { loadedProduct } = props;

  //사전에 생성되지 않은 데이터때문에 사용.
  // 폴백 기능이라고 한다. (useEffect같은 기능을 한다.)
  if (!loadedProduct) {
    return <p>Loading...</p>;
  }

  return (
    <Fragment>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </Fragment>
  );
}

export default ProductDetailPage;

async function getData() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  return data;
}

export async function getStaticProps(context) {
  //params(매개변수)는 키-값 쌍이 있는 객체이며 키의 식별자는 동적 매개변수
  const { params } = context;
  //pid값을 가져옴
  const productId = params.pid;

  //코드 리팩토링 (중복 제거 하단 Path 에서도 쓸거임)
  // const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  // //fs는 노드 모듈로 클라이언트측에서 보이지 않음 (렌더링 된 후 사라짐) 실 보여지는 코드만 보여짐
  // //데이터 읽어옴
  // const jsonData = await fs.readFile(filePath);
  // //parse를 통해 자바스크립트 일반 객체로 변환
  // const data = JSON.parse(jsonData);

  const data = await getData();
  const product = data.products.find((product) => product.id === productId);

  // url에 존재하지 않는 id값을 넣었을때 404페이지 출력
  // getStaticPaths에서도 fallback true와 jsx 코드에서도 next가 렌더링될때까지 기다리는 로딩 조건이 있어야함.
  if (!product) {
    return { notFound: true };
  }
  return {
    props: {
      loadedProduct: product,
    },
  };
}

//동적 페이지를 미리 생성하기 위해 사용
export async function getStaticPaths() {
  const data = await getData();
  const ids = data.products.map((product) => product.id);
  const paramsWithParams = ids.map((id) => ({ params: { pid: id } }));

  // 이렇게 한 줄로 사용해도 된다.
  //  const ids = data.products.map((product) => ({ params: { pid: product.id } }));

  return {
    paths: paramsWithParams,
    fallback: true,
  };

  // return {
  //   paths: [
  //     // { params: { pid: "p1" } },
  //     // { params: { pid: "p2" } },
  //     // { params: { pid: "p3" } },
  //   ],
  //   // fallback key는 사전 생성되어야 할 페이지가 많을 때 도움이 된다.
  //   // false면 전부 다 사전 렌더링 (방문자가 적든 많든)

  //   // true면 선택적만 사전 렌더링한다. 선택되지 않은건 요청이 서버에 도달하는 순간 생성
  //   // params을 선택적으로 넣을 수 있고 나머지를 안넣어도 로딩되는 값이 유효

  //   // fallback: false,
  //   fallback: true,

  //   //'blocking'으로 설정할 경우 서버에 완전히 사전 생성되도록 기다린 후 보여진다. (응답하는 시간이 길어질 수 있다.)
  //   // 개인적으론 딱히 좋다고 생각이 안든다,,,
  //   //fallback: 'blocking'
  // };
}
