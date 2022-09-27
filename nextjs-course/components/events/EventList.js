import EventItem from "./EventItem";

function EventList(props) {
  const { items } = props;
  console.log(items);
  return (
    <ul>
      {/* {props.items.map((event) => (
        <EventItem />
      ))} */}
    </ul>
  );
}

export default EventList;
