import { useState } from "react";
import { InputNumber, Form, Radio } from "antd";
import type { RadioChangeEvent } from "antd";

const PropertyDetailsComponent = () => {
  const [value, setValue] = useState(1);

  const onChangeInputNum = (value: number | null) => {
    console.log("changed", value);
  };

  const onChangeRadio = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const labelStyle = { width: "300px", display: "inline-block" };

  return (
    <Form>
      <Form.Item
        label={
          <span style={labelStyle}>
            How many guests can your place accomodate?
          </span>
        }
      >
        <InputNumber
          min={1}
          max={1000}
          defaultValue={1}
          onChange={onChangeInputNum}
        />
      </Form.Item>
      <Form.Item label={<span style={labelStyle}>How many bedrooms?</span>}>
        <InputNumber
          min={1}
          max={1000}
          defaultValue={1}
          onChange={onChangeInputNum}
        />
      </Form.Item>
      <Form.Item label={<span style={labelStyle}>How many beds?</span>}>
        <InputNumber
          min={1}
          max={1000}
          defaultValue={1}
          onChange={onChangeInputNum}
        />
      </Form.Item>
      <Form.Item label={<span style={labelStyle}>How many bathrooms?</span>}>
        <InputNumber
          min={1}
          max={1000}
          defaultValue={1}
          onChange={onChangeInputNum}
        />
      </Form.Item>
      <Form.Item
        label={<span style={labelStyle}>Are the bathrooms private?</span>}
      >
        <Radio.Group onChange={onChangeRadio} value={value}>
          <Radio value={1}>Yes</Radio>
          <Radio value={2}>No</Radio>
        </Radio.Group>
      </Form.Item>
    </Form>
  );
};

export default PropertyDetailsComponent;
