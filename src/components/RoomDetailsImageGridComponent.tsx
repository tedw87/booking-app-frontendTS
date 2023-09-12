import { Row, Col } from "react-bootstrap";
import mainPhoto from "../images/main.jpg";

const RoomDetailsImageGridComponent = () => {
  return (
    <Row className="no-gutter">
      <Col className="no-gutter" md={6}>
        <img
          className="w-100 h-100 m-0 p-1 rounded-4 rounded-end"
          src={mainPhoto}
          alt="main-photo-placeholder"
        />
      </Col>
      <Col className="no-gutter" md={6}>
        <Row className="no-gutter">
          <Col className="no-gutter" md={6}>
            <img
              className="w-100 h-100 p-1"
              src={mainPhoto}
              alt="main-photo-placeholder"
            />
          </Col>
          <Col className="no-gutter" md={6}>
            <img
              className="w-100 p-1"
              style={{ borderTopRightRadius: 20 }}
              src={mainPhoto}
              alt="main-photo-placeholder"
            />
          </Col>
        </Row>
        <Row className="no-gutter">
          <Col className="no-gutter" md={6}>
            <img
              className="w-100 p-1"
              src={mainPhoto}
              alt="main-photo-placeholder"
            />
          </Col>
          <Col className="no-gutter" md={6}>
            <img
              className="w-100 p-1"
              style={{ borderBottomRightRadius: 20 }}
              src={mainPhoto}
              alt="main-photo-placeholder"
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default RoomDetailsImageGridComponent;
