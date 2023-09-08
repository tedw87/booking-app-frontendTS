import { useState } from "react";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import bookingPhoto1 from "../images/cabana.jpeg";
import bookingPhoto2 from "../images/caban4.jpg";
import bookingPhoto3 from "../images/cabana2.jpg";

const CardComponent = () => {
  const [index, setIndex] = useState<number>(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Card className="custom-card">
      <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={bookingPhoto1}
            alt="First slide"
          />
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
        <Card.Title className="fs-6">Rasnov, Romania</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
