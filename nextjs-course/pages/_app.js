import Layout from "../components/layout/layout";
import "../styles/globals.css";
import Head from "next/head";

// 여기서 Head는 JSX 코드를 어디서나 조정하기 위해 사용
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {/* head에 쉽게 추가 가능 */}
      {/* 검색 엔진에 필요 */}
      <Head>
        <title>NextJS Events</title>
        <meta name="description" content="NextJS Events Home Page." />
        {/* 반응형 페이지의 스케일을 적정값으로 만드는데 자주 쓰인다. */}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
