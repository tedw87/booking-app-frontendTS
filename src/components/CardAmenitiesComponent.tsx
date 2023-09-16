import { Card } from "antd";
import { Row, Col } from "react-bootstrap";

const CardAmenitiesComponent = () => {
  return (
    <Card
      title="What this place offers"
      bordered={true}
      style={{ width: "100%", height: "300px" }}
    >
      {Array.from({ length: 5 }).map((_, idx) => (
        <Row key={idx}>
          <Col md={6}>
            <div className="m-0 p-0 d-flex justify-content-center align-items-center">
              <i className="fa fa-user-circle fa-2x login-icon m-1"></i>
              <p className="m-0 p-0">Some facilities here</p>
            </div>
          </Col>
          <Col md={6}>
            <div className="m-0 p-0 d-flex justify-content-center align-items-center">
              <i className="fa fa-user-circle fa-2x login-icon m-1"></i>
              <p className="m-0 p-0">Some facilities here</p>
            </div>
          </Col>
        </Row>
      ))}
    </Card>
  );
};

export default CardAmenitiesComponent;
