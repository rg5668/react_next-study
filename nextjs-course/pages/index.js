import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../dummy-data";

function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <main>
      <section>
        <EventList items={featuredEvents} />
      </section>
    </main>
  );
}

export default HomePage;
