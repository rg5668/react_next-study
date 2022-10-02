import { useRouter } from "next/router";
import { Fragment } from "react";
import EventContent from "../../components/event-detail/EventContent";
import EventLogistics from "../../components/event-detail/EventLogistics";
import EventSummary from "../../components/event-detail/EventSummary";
import ErrorAlert from "../../components/ui/ErrorAlert";
import {
  getAllEvents,
  getEventById,
  getFeaturedEvents,
} from "../../helpers/api-utill";

function EventDetailPage(props) {
  // const router = useRouter();
  // const eventId = router.query.eventId;
  // const event = getEventById(eventId);
  // console.log(props.id);
  const { event } = props;

  if (!event) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No event found!</p>
        </ErrorAlert>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export default EventDetailPage;

export async function getStaticPaths() {
  const events = await getFeaturedEvents();
  const paths = events.map((event) => ({ params: { eventId: event.id } }));
  return {
    paths: paths,
    // 생성될 페이지가 많을때 fallback을 t
    // 사전에 정의가 된 페이지를 설정하고 f
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const id = params.eventId;
  const eventId = await getEventById(id);

  return {
    props: {
      event: eventId,
    },
    // 페이지가 배포된 이후 실시간으로 반영되어야하는데 자주 바뀌지 않으므로
    // serversideprops보단 이 방법을 추천
    revalidate: 30,
  };
}
