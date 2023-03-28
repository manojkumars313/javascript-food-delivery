import React, { useContext } from "react";
import "./banner.css";
import SearchBox from "../SearchBox";
import { SearchContext } from "./../../components/RestaurantApp/RestaurantApp";

const Banner = () => {
  const [searchQuery, onChange] = useContext(SearchContext);

  return (
    <div className="banner-container">
      <div className="banner-content">
        <h2>Great restaurants in your area, delivering to you</h2>
        <SearchBox value={searchQuery} onChange={onChange} />
      </div>
    </div>
  );
};

export default Banner;
