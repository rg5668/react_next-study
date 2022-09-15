import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewAllMeetup() {
  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-getting-started-9f5df-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  return (
    <section>
      <h1>All New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewAllMeetup;
