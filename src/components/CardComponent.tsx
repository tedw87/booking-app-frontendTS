import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "font-awesome/css/font-awesome.min.css";
import Carousel from "react-bootstrap/Carousel";
import bookingPhoto1 from "../images/cabana.jpeg";
import bookingPhoto2 from "../images/caban4.jpg";
import bookingPhoto3 from "../images/cabana2.jpg";

const CardComponent = () => {
  const [index, setIndex] = useState<number>(0);
  const [filled, setFilled] = useState<boolean>(false);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  const toggleFilled = () => {
    setFilled(!filled);
  };

  return (
    <Card className="custom-card">
      <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
        <Carousel.Item>
          <Link to="/room-details">
            <img
              className="d-block w-100 carousel-image"
              src={bookingPhoto1}
              alt="First slide"
            />
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/room-details">
            <img
              className="d-block w-100 carousel-image"
              src={bookingPhoto2}
              alt="Second slide"
            />
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/room-details">
            <img
              className="d-block w-100 carousel-image"
              src={bookingPhoto3}
              alt="Third slide"
            />
          </Link>
        </Carousel.Item>
      </Carousel>
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center">
          <Card.Title className="card-title-text mb-1">
            Romania, Rasnov
          </Card.Title>
          <i className=" fa fa-star rating-star" title="rating">
            <span>5</span>
          </i>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center mt-3">
          <Card.Text className="mb-1 card-available-text">
            Sep 5th 23 - Sep 19th 22
          </Card.Text>
          <Card.Text className="fs-10 m-0 text-muted grey-card-text">
            Cabin
          </Card.Text>
          <Card.Title className="card-price-text mb-3 mt-2">
            123$/night
          </Card.Title>
          <i
            className={`fa ${
              filled
                ? "fa-heart fa-lg red-heart mt-1"
                : "fa-heart fa-lg grey-heart mt-1"
            }`}
            onClick={toggleFilled}
            title="Add to favorites"
          ></i>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
