import { Card, DatePicker, InputNumber, Button } from "antd";
import { useNavigate } from "react-router";

const { RangePicker } = DatePicker;

const CardReserveComponent = () => {
  const navigate = useNavigate();

  return (
    <Card
      title="Add dates for prices"
      bordered={true}
      style={{ width: "100%", height: "300px" }}
    >
      <h5 className="fs-6">600$ night</h5>
      <h5 className="mb-2 fs-6">Your checkin dates</h5>
      <div style={{ height: "100px" }}>
        <RangePicker className="ant-picker-input h-50" />
        <InputNumber
          className="rounded-bottom-input w-100  h-50"
          placeholder="Number of guests"
          style={{
            textAlign: "center",
            lineHeight: "50px",
          }}
        />
      </div>
      <Button
        className="reserve-button"
        onClick={() => navigate("/reserve-room")}
      >
        Reserve
      </Button>
    </Card>
  );
};

export default CardReserveComponent;
