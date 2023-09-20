import { Select, Form } from "antd";

const SelectPropertyComponent = () => {
  return (
    <Form>
      <Form.Item>
        <Select placeholder="What kind of place are you listing">
          <Select.Option value="castle">Castle</Select.Option>
          <Select.Option value="cabin">Cabin</Select.Option>
          <Select.Option value="mansion">Mansion</Select.Option>
          <Select.Option value="aframe">A-frame</Select.Option>
        </Select>
        <Select placeholder="Property type">
          <Select.Option value="oneroom">One room</Select.Option>
          <Select.Option value="whole">Whole Space</Select.Option>
          <Select.Option value="apartment">Apartment</Select.Option>
          <Select.Option value="studio">Studio</Select.Option>
        </Select>
      </Form.Item>
    </Form>
  );
};

export default SelectPropertyComponent;
