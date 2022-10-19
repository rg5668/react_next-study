import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="ko">
      <Head />
      <body>
        <Main />
        <NextScript />
        {/* portal 사용하는 방법 id로 연결 후 react-dom을 사용하여 설정 좋은 방법인듯(notifications) 컴포넌트에서 설정 */}
        {/* _document.js 파일을 사용할때만 가능한 기법이다. */}
        {/* notifications markup이 page 하단에 포함이 된다. */}
        <div id="notifications"></div>
      </body>
    </Html>
  );
};

export default Document;
