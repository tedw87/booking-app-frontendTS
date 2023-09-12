import { Card } from "antd";
import { Row, Col } from "react-bootstrap";

const CardAmenitiesComponent = () => {
  return (
    <Card
      title="What this place offers"
      bordered={true}
      style={{ width: "100%" }}
    >
      {Array.from({ length: 5 }).map((_, idx) => (
        <Row>
          <i className="fa fa-user-circle fa-2x login-icon mt-3 inline-block"></i>
        </Row>
      ))}
    </Card>
  );
};

export default CardAmenitiesComponent;
