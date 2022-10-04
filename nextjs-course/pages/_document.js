import Document, { Html, Head, Main, NextScript } from "next/document";

// _app.js에서 사용하는 Head와 다르다. 여기에 작성된것은 특수한 문서 컴포넌트에서만 사용
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          {/* 팝업, 모달을 생성할 수 있다. */}
          <div id="overlays" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
