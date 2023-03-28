import React, { useContext, useEffect, useState } from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import Discount from "../../images/discount.png";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { RestaurantContext } from "../../App";
import { SearchContext } from "./../../components/RestaurantApp/RestaurantApp";

const ProductCard = ({ onRestaurantSelect }) => {
  const restaurants = useContext(RestaurantContext);
  const [searchQuery] = useContext(SearchContext);

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    const handleSearch = (query) => {
      const result = query
        ? restaurants.filter(
            (restaurant) =>
              restaurant.name.toLowerCase().includes(query.toLowerCase()) ||
              restaurant.categories.toLowerCase().includes(query.toLowerCase())
          )
        : restaurants;
      setFilteredRestaurants(result);
    };

    handleSearch(searchQuery);
  }, [searchQuery, restaurants]);

  return (
    <div>
      <h4 style={{ margin: "1rem" }}>
        <span
          style={{
            background: "#ec8738",
            padding: "2px 6px",
            fontSize: "1.2rem",
            borderRadius: "5px",
            color: "#ffffff",
          }}
        >
          {filteredRestaurants.length}
        </span>
        &nbsp;restaurants
      </h4>
      <Row xs={1} md={3} lg={5} id="restaurants" className=" g-4 ">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant._id}
            to={`/restaurant/${restaurant._id}`}
            style={{ textDecoration: "none", color: "grey" }}
          >
            <Col
              onClick={() => onRestaurantSelect(restaurant)}
              style={{
                width: "270px",
                margin: "auto",
                alignItems: "center",
              }}
              className="items-card"
            >
              <Card className="item-container" style={{ border: "none" }}>
                <Card style={{ border: "none" }}>
                  <Card.Img
                    variant="top"
                    src={restaurant.imageURL}
                    style={{ height: "150px", objectFit: "cover" }}
                  />
                  <Card.Body style={{ padding: "5px" }}>
                    <Card.Title>{restaurant.name}</Card.Title>
                    <Card.Text>{restaurant.categories}</Card.Text>
                    <div className="ratings-n-price">
                      <span
                        className="item-rating"
                        style={{
                          background:
                            restaurant.rating >= 4.0 ? "green" : "orange",
                        }}
                      >
                        <span className="star material-symbols-sharp">
                          star
                        </span>
                        {restaurant.rating.toFixed(1)}
                      </span>
                      <span>-</span>
                      <span className="item-price">
                        ₹{restaurant.price} for two
                      </span>
                    </div>
                    <hr />
                    <div className="item-offer">
                      <img src={Discount} alt="" />
                      {restaurant.offer}
                    </div>
                  </Card.Body>
                </Card>
              </Card>
            </Col>
          </Link>
        ))}
      </Row>
    </div>
  );
};

export default ProductCard;
