import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6426028&lng=77.21921669999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );

    const json = await data.json();

    console.log(json);
    const restaurants =
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;

    setListOfRestaurants(restaurants);
  };

  if (listOfRestaurants.length === 0) {
    return <Shimmer/>;
  }

  return (
    <div>
      <button
        className="filter-btn"
        onClick={() => {
          const filteredList = listOfRestaurants.filter((res) => {
            return res.info.avgRating > 4;
          });

          setListOfRestaurants(filteredList);
        }}
      >
        Top Rated Restaurant
      </button>

      <div className="res-container">
        {listOfRestaurants.map((restaurant, index) => (
          <RestaurantCard
            key={restaurant.info.id + "-" + index}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
