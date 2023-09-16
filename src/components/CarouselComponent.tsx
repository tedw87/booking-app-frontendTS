import { useState } from "react";
import { Carousel } from "react-bootstrap";
import bookingPhoto0 from "../images/main.jpg";
import bookingPhoto1 from "../images/cabana.jpeg";
import bookingPhoto2 from "../images/caban4.jpg";
import bookingPhoto3 from "../images/cabana2.jpg";
import bookingPhoto4 from "../images/cabana6.jpeg";
import bookingPhoto5 from "../images/cabana8.jpeg";

const CarouselComponent = () => {
  const [index, setIndex] = useState<number>(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={bookingPhoto0}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={bookingPhoto1}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={bookingPhoto2}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={bookingPhoto3}
          alt="fourth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={bookingPhoto4}
          alt="five slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={bookingPhoto5}
          alt="six slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
