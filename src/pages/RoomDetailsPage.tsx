import { Container, Row, Col } from "react-bootstrap";
import RoomDetailsImageGridComponent from "../components/RoomDetailsImageGridComponent.tsx";
import CardReserveComponent from "../components/CardReserveComponent.tsx";
import CardAmenitiesComponent from "../components/CardAmenitiesComponent.tsx";
import PageDetailsMap from "../components/PageDetailsMapComponent.tsx";

const RoomDetailsPage = () => {
  return (
    <Container className="room-details-container">
      <Row className="no-gutter mt-5">
        <RoomDetailsImageGridComponent />
      </Row>
      <Row className="no-gutter">
        <Col md={8} className="no-gutter p-1">
          <CardAmenitiesComponent />
        </Col>
        <Col md={4} className="no-gutter p-1">
          <CardReserveComponent />
        </Col>
      </Row>
      <Row>
        <Col>
          <PageDetailsMap />
        </Col>
      </Row>
    </Container>
  );
};

export default RoomDetailsPage;
