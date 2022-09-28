import { useRouter } from "next/router";
import { Fragment } from "react";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/EventsSearch";
import { getAllEvents, getFilteredEvents } from "../../dummy-data";

function AllEventsPage() {
  const allEvents = getAllEvents();
  const router = useRouter();

  //EventsSearch에서 submit되면 선택된 년도와 월일을 가져오고
  //pullPath로 이동
  function findEventHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }
  return (
    <Fragment>
      <EventsSearch onSearch={findEventHandler} />
      <EventList items={allEvents} />
    </Fragment>
  );
}

export default AllEventsPage;
