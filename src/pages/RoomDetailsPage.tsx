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
      <p className="text-center mt-2">
        Situated 5 min walk from the lake in a secluded area with astonishing
        lake views,this cabin offers you the perfect getaway with
        family/friends. The space The cabin has on the ground floor a big living
        room with open kitchen,fully equipped and a bathroom with shower and a
        separate toilet.First floor has 4 bedrooms with double beds & 1
        double-decker bed and also bathroom with shower& separate toilet.
      </p>
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
