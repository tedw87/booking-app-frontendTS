import { useState } from "react";
import { Button, message, Steps, theme } from "antd";
import SelectPropertyComponent from "../components/SelectPropertyComponent";
import PropertyDetailsComponent from "../components/PropertyDetailsComponent";

const steps = [
  {
    title: "Property",
    content: <SelectPropertyComponent />,
  },
  {
    title: "Property Details",
    content: <PropertyDetailsComponent />,
  },
  {
    title: "Location",
    content: "Last-content",
  },
  {
    title: "Amenities",
    content: "Last-content",
  },
  {
    title: "Photos",
    content: "Last-content",
  },
];

const AddRoomPage = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const contentStyle: React.CSSProperties = {
    lineHeight: "260px",
    textAlign: "center",
    color: token.colorTextTertiary,
    marginTop: 100,
    marginBottom: 100,
  };

  return (
    <div className="add-room-container">
      <Steps current={current} items={items} />
      <div style={contentStyle}>{steps[current].content}</div>
      <div style={{ marginTop: 24 }}>
        {current < steps.length - 1 && (
          <Button className="pink-button" type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            className="pink-button"
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </div>
  );
};

export default AddRoomPage;
