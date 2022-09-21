import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoritesHandler,
    removeFavorite: removeFavoritesHandler,
    itemIsFavorite: itemIsFavoritesHandler,
  };

  function addFavoritesHandler(favoriteMeetup) {
    setUserFavorites((prevUserFavorites) => {
      //   prevUserFavorites에 favoriteMeetup의 새로운 배열 생성
      return prevUserFavorites.concat(favoriteMeetup);
    });
  }

  function removeFavoritesHandler(meetupId) {
    setUserFavorites((prevUserFavorites) => {
      // filter를 통해
      return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
    });
  }

  function itemIsFavoritesHandler(meetupId) {
    //
    return userFavorites.some((meetup) => meetup.id === meetupId);
  }

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
