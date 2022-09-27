import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../dummy-data";

function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList itmes={featuredEvents} />
    </div>
  );
}

export default HomePage;
