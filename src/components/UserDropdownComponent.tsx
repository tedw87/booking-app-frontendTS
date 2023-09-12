import { Link } from "react-router-dom";
import type { MenuProps } from "antd";
import { Button, Dropdown } from "antd";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <Link style={{ textDecoration: "none" }} to="/login">
        Login
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link style={{ textDecoration: "none" }} to="/">
        Logout
      </Link>
    ),
  },
  {
    key: "3",
    label: (
      <Link style={{ textDecoration: "none" }} to="/profile">
        Profile
      </Link>
    ),
  },
];

const UserDropdownComponent = () => (
  <Dropdown menu={{ items }} placement="bottom">
    <Button style={{ border: "none", outline: "none" }}>
      <i className="fa fa-user-circle fa-2x login-icon"></i>
    </Button>
  </Dropdown>
);

export default UserDropdownComponent;
