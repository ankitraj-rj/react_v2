import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setresInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6426028&lng=77.21921669999999&restaurantId=1257078&catalog_qa=undefined&submitAction=ENTER",
    );

    const json = await data.json();

    console.log(json);
  };

  if (resInfo === null) return <Shimmer />;

  return (
    <div className="menu">
      <h1>Name of the restaurant</h1>
      <h2>Menu of the restaurant</h2>
      <ul>
        <li>Biryani</li>
        <li>Burgers</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
