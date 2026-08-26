import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Shimmer from "./Shimmer";

import {
  CDN_URL,
  SWIGGY_MENU_API,
  getProxyUrl,
} from "../utils/constants";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [resInfo, setResInfo] = useState(null);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    try {
      const response = await fetch(
        getProxyUrl(
          SWIGGY_MENU_API + resId
        )
      );

      if (!response.ok) {
        throw new Error(
          "Failed to fetch restaurant menu"
        );
      }

      const json = await response.json();

      const cards = json?.data?.cards || [];

      let restaurantInfo = null;
      let items = [];

      const findData = (value) => {
        if (!value || typeof value !== "object") {
          return;
        }

        if (
          value?.card?.card?.info &&
          value.card.card.info.name
        ) {
          restaurantInfo =
            value.card.card.info;
        }

        if (
          Array.isArray(value?.card?.card?.itemCards)
        ) {
          items.push(
            ...value.card.card.itemCards
          );
        }

        if (Array.isArray(value)) {
          value.forEach(findData);
        } else {
          Object.values(value).forEach(findData);
        }
      };

      findData(cards);

      const uniqueItems = Array.from(
        new Map(
          items
            .map((item) => item?.card?.info)
            .filter(Boolean)
            .map((item) => [item.id, item])
        ).values()
      );

      setResInfo(restaurantInfo);
      setMenuItems(uniqueItems);
    } catch (error) {
      console.error(
        "Menu API Error:",
        error
      );
    }
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  return (
    <div className="menu">
      <div className="menu-header">
        <h1>{resInfo.name}</h1>

        <h3>
          {resInfo.cuisines?.join(", ")}
        </h3>

        <p>
          ⭐ {resInfo.avgRating} •{" "}
          {resInfo.costForTwo}
        </p>
      </div>

      <div className="menu-category">
        <h2>Menu</h2>

        {menuItems.length === 0 ? (
          <p>
            Menu items are currently unavailable.
          </p>
        ) : (
          menuItems.map((item) => (
            <div
              className="menu-item"
              key={item.id}
            >
              <div className="menu-item-info">
                <h3>{item.name}</h3>

                <h4>
                  ₹
                  {item.price
                    ? item.price / 100
                    : item.defaultPrice
                      ? item.defaultPrice / 100
                      : "N/A"}
                </h4>

                <p>
                  {item.description ||
                    "No description available."}
                </p>
              </div>

              {item.imageId && (
                <img
                  className="menu-item-image"
                  src={
                    CDN_URL +
                    item.imageId
                  }
                  alt={item.name}
                />
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;