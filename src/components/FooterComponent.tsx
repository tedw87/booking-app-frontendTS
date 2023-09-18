import { Row, Col } from "react-bootstrap";

const FooterComponent = () => {
  return (
    <footer>
      <Row className="mt-3">
        <Col className="text-center py-5">
          Copyright &copy; Trawell - Best Booking App
        </Col>
      </Row>
    </footer>
  );
};

export default FooterComponent;
