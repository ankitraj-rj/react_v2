import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const {
    id,
    name,
    cloudinaryImageId,
    cuisines = [],
    avgRating,
    costForTwo,
    sla,
  } = resData.info;

  const deliveryTime = sla?.deliveryTime;

  return (
    <Link
      to={`/restaurants/${id}`}
      className="res-link"
    >
      <div className="res-card">
        <img
          className="res-logo"
          src={CDN_URL + cloudinaryImageId}
          alt={name}
        />

        <h3>{name}</h3>

        <h4>
          {cuisines.join(", ")}
        </h4>

        <h4>
          ⭐ {avgRating}
        </h4>

        <h4>
          {deliveryTime
            ? `${deliveryTime} mins`
            : "Delivery time unavailable"}
        </h4>

        <h4>
          {costForTwo || "Price unavailable"}
        </h4>
      </div>
    </Link>
  );
};

export default RestaurantCard;