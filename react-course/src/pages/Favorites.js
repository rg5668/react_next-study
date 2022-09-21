import MeetupList from "../components/meetups/MeetupList";

function Favorites() {
  //const favoritesCtx = useContext(FavoritesContext);
  let content;

  let data = JSON.parse(localStorage.getItem("favoritesCtx"));
  console.log(data);
  if (data.totalFavorites === 0) {
    content = <p>You got no favorites yet. Start adding some?</p>;
  } else {
    content = <MeetupList meetups={data.favorites} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default Favorites;
