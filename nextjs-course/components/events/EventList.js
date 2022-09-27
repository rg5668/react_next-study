import EventItem from "./EventItem";

function EventList(props) {
  const { items } = props;
  console.log(props);
  return (
    <ul>
      {props.items?.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
        />
      ))}
    </ul>
  );
}

export default EventList;
