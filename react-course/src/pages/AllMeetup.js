import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

/**
 * all meetups에서 즐겨찾기 하고 myfavorites로 가서 로컬스토리지 데이터 정상적으로 저장 후 불러와지지만(새로고침해도)
 * 1. 즐겨찾기에서 새로고침하면 버튼은 add로 바뀜
 * 2. 이슈는 그 상대로 all meetups에 다시 들어가면 데이터 초기화
 */

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

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-getting-started-9f5df-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // 데이터를 얻은 후 false
        // firebase에서 배열이 아닌 객체로 들어와서 배열로 변형을 해줘야함.
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };

          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadeMeetups(meetups);
        // console.log(meetups);
      });
  }, []);

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
