import React, { createContext, useState } from "react";

import Banner from "../../common/Banner/banner";
import ProductCard from "../../common/productCard/ProductCard";

export const SearchContext = createContext();

const RestaurantApp = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChange = (value) => {
    setSearchQuery(value);
    // console.log(value);
  };

  const restaurantSelected = (restaurant) => {
    console.log(restaurant);
  };

  return (
    <div>
      <SearchContext.Provider value={[searchQuery, onChange]}>
        <Banner />
        <ProductCard onRestaurantSelect={restaurantSelected} />
      </SearchContext.Provider>
    </div>
  );
};

export default RestaurantApp;
