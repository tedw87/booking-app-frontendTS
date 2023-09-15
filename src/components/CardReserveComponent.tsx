import { Card, DatePicker, InputNumber, Button } from "antd";

const { RangePicker } = DatePicker;

const CardReserveComponent = () => {
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
            textAlign: "center", // Center text horizontally
            lineHeight: "50px", // Center text vertically
          }}
        />
      </div>
      <Button className="reserve-button">Reserve</Button>
    </Card>
  );
};

export default CardReserveComponent;
