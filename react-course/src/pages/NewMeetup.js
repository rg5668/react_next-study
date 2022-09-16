import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewAllMeetup() {
  //useHistory는 브라우저 기록을 조작할 수 있는 메서드
  const history = useHistory();

  // Form에서 전달 받은 meetupData를 통해 데이터 저장
  function addMeetupHandler(meetupData) {
    // fetch Promise를 반환
    fetch(
      "https://react-getting-started-9f5df-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  }

  return (
    <section>
      <h1>All New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewAllMeetup;
