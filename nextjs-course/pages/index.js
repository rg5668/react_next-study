import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../helpers/api-utill";

function HomePage(props) {
  const { events } = props;

  return (
    <div>
      <EventList items={events} />
    </div>
  );
}

export default HomePage;

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
    // 페이지가 배포된 이후 실시간으로 반영되어야하는데 자주 바뀌지 않으므로
    // serversideprops보단 이 방법을 추천
    revalidate: 1800,
  };
}

// export async function getStaticProps() {
//   const response = await fetch(
//     "https://nextjs-course-16f93-default-rtdb.firebaseio.com/events.json"
//   );
//   const data = await response.json();
//   const transformedEvents = [];

//   for (const key in data) {
//     transformedEvents.push({
//       id: key,
//       title: data[key].title,
//       description: data[key].description,
//       location: data[key].location,
//       date: data[key].date,
//       image: data[key].image,
//       isFeatured: data[key].isFeatured,
//     });
//   }

//   return {
//     props: {
//       events: transformedEvents,
//     },
//   };
// }
