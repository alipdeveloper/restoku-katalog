import UrlParser from "../../routes/url-parser";
import RestaurantSource from "../../data/restaurant-source";
import {
  createRestoDetailTemplate,
  createRestoReviewTemplate,
} from "../templates/template-creator";
import FavoriteButtonInitiator from "../../utils/favorite-btn-initiator";

import "../../component/resto-detail";
import "../../component/resto-review";

const Detail = {
  async render() {
    return `
      <resto-detail></resto-detail>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantById = await RestaurantSource.detailResto(url.id);
    const detail = restaurantById.restaurant;
    const restoContainer = document.querySelector("#resto-detail");
    restoContainer.innerHTML = createRestoDetailTemplate(detail);

    restoContainer.innerHTML += `
      <resto-review></resto-review>
    `;

    const restoReview = document.querySelector("#resto-review");
    detail.customerReviews.forEach((review) => {
      restoReview.innerHTML += createRestoReviewTemplate(review);
    });

    FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector(
        "#favoriteButtonContainer"
      ),
      restaurant: {
        id: detail.id,
        name: detail.name,
        pictureId: detail.pictureId,
        city: detail.city,
        rating: detail.rating,
        description: detail.description,
      },
    });
  },
};

export default Detail;
