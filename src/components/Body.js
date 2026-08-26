import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

import {
  SWIGGY_API,
  getProxyUrl,
} from "../utils/constants";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] =
    useState([]);

  const [filteredRestaurants, setFilteredRestaurants] =
    useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        getProxyUrl(SWIGGY_API)
      );

      if (!response.ok) {
        throw new Error("Failed to fetch restaurants");
      }

      const json = await response.json();

      const restaurants =
        json?.data?.cards
          ?.flatMap(
            (card) =>
              card?.card?.card?.gridElements
                ?.infoWithStyle?.restaurants || []
          ) || [];

      setListOfRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
    } catch (error) {
      console.error("Restaurant API Error:", error);
    }
  };

  const handleSearch = () => {
    const filteredRestaurant = listOfRestaurants.filter(
      (res) =>
        res?.info?.name
          ?.toLowerCase()
          .includes(searchText.toLowerCase())
    );

    setFilteredRestaurants(filteredRestaurant);
  };

  const handleTopRated = () => {
    const filteredList = listOfRestaurants.filter(
      (res) => res?.info?.avgRating > 4
    );

    setFilteredRestaurants(filteredList);
  };

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Search restaurant..."
            value={searchText}
            onChange={(e) =>
              setSearchText(e.target.value)
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />

          <button onClick={handleSearch}>
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={handleTopRated}
        >
          Top Rated Restaurant
        </button>

        <button
          className="filter-btn"
          onClick={() => {
            setFilteredRestaurants(listOfRestaurants);
            setSearchText("");
          }}
        >
          Reset
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurants.map((restaurant, index) => (
          <RestaurantCard
            key={
              restaurant?.info?.id +
              "-" +
              index
            }
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;