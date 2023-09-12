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
          <img
            className="d-block w-100 carousel-image"
            src={bookingPhoto2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={bookingPhoto3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center">
          <Card.Title className="fs-6 mb-1">Rasnov, Romania</Card.Title>
          <i
            className={`fa ${filled ? "fa-heart red-heart" : "fa-heart-o"}`}
            onClick={toggleFilled}
            title="Add to favorites"
          ></i>
        </div>
        <Card.Text className="fs-10 m-0 text-muted">
          Types of view here
        </Card.Text>
        <Card.Text className="text-small mb-1 text-muted">Sep 15-20</Card.Text>
        <Card.Title className="fs-6 mb-2s m-0">100$</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
