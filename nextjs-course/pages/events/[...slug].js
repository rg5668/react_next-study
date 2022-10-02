import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/events/ResultsTitle";
import Button from "../../components/ui/Button";
import ErrorAlert from "../../components/ui/ErrorAlert";
import { getFilteredEvents } from "../../helpers/api-utill";
import useSWR from "swr";

function FilterdEventsPage(props) {
  //events에서 이동한 query값을 가져옴

  // 클라이언트 패칭을 위해서 라우터 사용
  const router = useRouter();
  const [loadedEvents, setLoadedEvents] = useState();
  const filterData = router.query.slug;

  const path =
    "https://nextjs-course-16f93-default-rtdb.firebaseio.com/events.json";
  const { data, error } = useSWR(path, (path) =>
    fetch(path).then((res) => res.json())
  );

  useEffect(() => {
    if (data) {
      const events = [];

      for (const key in data) {
        events.push({
          id: key,
          ...data[key],
        });
      }
      setLoadedEvents(events);
    }
  }, [data]);

  if (!loadedEvents) {
    return <p className="center">Loading...</p>;
  }
  //slug[0],[1]
  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];
  //숫자로 변경
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  const filteredEvents = loadedEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === numYear &&
      eventDate.getMonth() === numMonth - 1
    );
  });

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12 ||
    error
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  //해당 값을 통해 필터하고 조건에 맞는 데이터만 뽑아냄
  // const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });

  // const filteredEvents = props.events;

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found for the chosen filter</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  //index가 0부터 시작하기때문에 월-1
  // const date = new Date(props.date.numYear, props.date.numMonth - 1);
  const date = new Date(numYear, numMonth - 1);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}

export default FilterdEventsPage;

// export async function getServerSideProps(context) {
//   const { params } = context;
//   const filterData = params.slug;

//   //slug[0],[1]
//   const filteredYear = filterData[0];
//   const filteredMonth = filterData[1];
//   //숫자로 변경
//   const numYear = +filteredYear;
//   const numMonth = +filteredMonth;

//   if (
//     isNaN(numYear) ||
//     isNaN(numMonth) ||
//     numYear > 2030 ||
//     numYear < 2021 ||
//     numMonth < 1 ||
//     numMonth > 12
//   ) {
//     return {
//       props: {
//         hasError: true,
//         // notFound: true,
//         // redirect: {
//         //   destination: './error'
//         // }
//       },
//     };
//   }

//   //해당 값을 통해 필터하고 조건에 맞는 데이터만 뽑아냄
//   const filteredEvents = await getFilteredEvents({
//     year: numYear,
//     month: numMonth,
//   });

//   return {
//     props: {
//       events: filteredEvents,
//       date: {
//         year: numYear,
//         month: numMonth,
//       },
//     },
//   };
// }
