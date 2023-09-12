import { Container, Row, Col } from "react-bootstrap";
import RoomDetailsImageGridComponent from "../components/RoomDetailsImageGridComponent.tsx";

const RoomDetailsPage = () => {
  return (
    <Container className="room-details-container">
      <Row className="mt-5">
        <RoomDetailsImageGridComponent />
      </Row>
      <Row>
        <Col></Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default RoomDetailsPage;
