import { useEffect, useState } from "react";
import MeetupItem from "../components/meetups/MeetupItem";
import MeetupList from "../components/meetups/MeetupList";

// const DUMMY_DATA = [
//   {
//     id: "m1",
//     title: "This is a first meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
//   {
//     id: "m2",
//     title: "This is a second meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
// ];

function AllMeetup() {
  // 로딩 상태에서 시작
  const [isLoading, setIsLoading] = useState(true);
  const [loadeMeetups, setLoadeMeetups] = useState([]);

  fetch(
    "https://react-getting-started-9f5df-default-rtdb.firebaseio.com/meetups.json"
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // 데이터를 얻은 후 false
      setIsLoading(false);
      setLoadeMeetups(data);
    });

  useEffect(() => {}, []);

  if (isLoading) {
    return (
      <section>
        <p>...Loading</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetup Page</h1>

      <MeetupList meetups={loadeMeetups} />
    </section>
  );
}

export default AllMeetup;
