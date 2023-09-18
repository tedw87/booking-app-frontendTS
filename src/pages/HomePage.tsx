import Row from "react-bootstrap/Row";
import CardComponent from "../components/CardComponent.tsx";

const HomePage = () => {
  return (
    <div className="custom-container">
      <Row xs={1} md={2} lg={3} xl={4} xxl={5} className="mt-3">
        {Array.from({ length: 20 }).map((_, idx) => (
          <div className="custom-col" key={idx}>
            <CardComponent />
          </div>
        ))}
      </Row>
    </div>
  );
};

export default HomePage;
