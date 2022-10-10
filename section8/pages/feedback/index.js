import { buildFeedbackPath, extractFeedback } from "../api/feedback";
import { Fragment, useState } from "react";

function FeedbackPage(props) {
  const [feedbackData, setFeedbackData] = useState();
  function loadFeedbackHandler(id) {
    fetch(`/api/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setFeedbackData(data.feedback);
      });
  }
  return (
    <Fragment>
      {feedbackData && <p>{feedbackData.email}</p>}
      <ul>
        {props.feedbackItems.map((item) => (
          <li key={item.id}>
            {/* bind는 함수를 미리 구성하게 해준다. (나중 실행을 위해 미리 구성) */}
            {item.text}
            <button onClick={loadFeedbackHandler.bind(null, item.id)}>
              Show Detail
            </button>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export async function getStaticProps() {
  // 한 프로젝트 내에서 api 가져오는 경우에는 fetch 대신 export를 한 함수를 가져오는 방법이 있다.
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);
  return {
    props: {
      feedbackItems: data,
    },
  };
}

export default FeedbackPage;
