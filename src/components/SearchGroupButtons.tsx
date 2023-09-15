import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { DatePicker } from "antd";
import "font-awesome/css/font-awesome.min.css";

const { RangePicker } = DatePicker;

const SearchGroupButtons: React.FC = () => {
  return (
    <ButtonGroup>
      <input
        type="text"
        className="form-control rounded-left-input"
        placeholder="Where?"
      />
      <RangePicker className="ant-picker-input-header" />
      <Button variant="light" className="search-button">
        <i className="fa fa-search "></i>
      </Button>
    </ButtonGroup>
  );
};

export default SearchGroupButtons;
