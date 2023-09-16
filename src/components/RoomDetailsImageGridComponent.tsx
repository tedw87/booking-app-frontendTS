import { useState, useEffect } from "react";
import { Modal } from "antd";
import { Row, Col } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import mainPhoto from "../images/main.jpg";
import bookingPhoto1 from "../images/cabana.jpeg";
import bookingPhoto2 from "../images/caban4.jpg";
import bookingPhoto3 from "../images/cabana2.jpg";
import bookingPhoto5 from "../images/cabana6.jpeg";
import bookingPhoto6 from "../images/cabana8.jpeg";

const RoomDetailsImageGridComponent = () => {
  const [index, setIndex] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 770);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 770);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isMobile) {
    return (
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
    );
  }
  return (
    <>
      <Modal
        width={900}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        bodyStyle={{ height: "auto" }}
      >
        <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
          <Carousel.Item>
            <img
              className="d-block w-100 h-100 carousel-image"
              src={bookingPhoto1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-100 carousel-image"
              src={bookingPhoto2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-100 carousel-image"
              src={bookingPhoto3}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Modal>
      <Row className="no-gutter">
        <Col className="no-gutter" md={6}>
          <img
            onClick={showModal}
            className="w-100 h-100 m-0 p-1 rounded-4 rounded-end custom-cursor"
            src={mainPhoto}
            alt="main-photo-placeholder"
          />
        </Col>
        <Col className="no-gutter" md={6}>
          <Row className="no-gutter">
            <Col className="no-gutter" md={6}>
              <img
                className="w-100 h-100 p-1"
                src={bookingPhoto2}
                alt="main-photo-placeholder"
              />
            </Col>
            <Col className="no-gutter" md={6}>
              <img
                className="w-100 p-1"
                style={{ borderTopRightRadius: 20 }}
                src={bookingPhoto3}
                alt="main-photo-placeholder"
              />
            </Col>
          </Row>
          <Row className="no-gutter">
            <Col className="no-gutter" md={6}>
              <img
                className="w-100 p-1"
                src={bookingPhoto5}
                alt="main-photo-placeholder"
              />
            </Col>
            <Col className="no-gutter" md={6}>
              <img
                className="img-cover w-100 p-1"
                style={{ borderBottomRightRadius: 20 }}
                src={bookingPhoto6}
                alt="main-photo-placeholder"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default RoomDetailsImageGridComponent;
