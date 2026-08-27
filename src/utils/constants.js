// api links and other links ...
export const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/";

export const SWIGGY_API =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6426028&lng=77.21921669999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

export const SWIGGY_MENU_API =
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6426028&lng=77.21921669999999&restaurantId=";

export const getProxyUrl = (url) =>
  `https://corsproxy.io/?url=${encodeURIComponent(url)}`;
