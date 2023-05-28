/* eslint-disable import/prefer-default-export */
import FavoriteRestaurantDB from "../../src/scripts/data/favoriterestaurant-db";
import FavoriteButtonInitiator from "../../src/scripts/utils/favorite-btn-initiator";

const createFavoriteButtonPresenterWithRestaurant = async (restaurant) => {
  await FavoriteButtonInitiator.init({
    favoriteButtonContainer: document.querySelector("#favoriteButtonContainer"),
    favoriteRestaurants: FavoriteRestaurantDB,
    restaurant,
  });
};

export { createFavoriteButtonPresenterWithRestaurant };
