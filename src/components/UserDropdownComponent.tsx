import { useNavigate } from "react-router-dom";
import type { MenuProps } from "antd";
import { Button, Dropdown } from "antd";

const UserDropdownComponent = () => {
  const navigate = useNavigate();

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <span
          onClick={() => navigate("/login")}
          style={{ textDecoration: "none" }}
        >
          Login
        </span>
      ),
    },
    {
      key: "2",
      label: (
        <span
          onClick={() => navigate("/login")}
          style={{ textDecoration: "none" }}
        >
          Add your place
        </span>
      ),
    },
    {
      key: "3",
      label: (
        <span
          onClick={() => navigate("/profile")}
          style={{ textDecoration: "none" }}
        >
          Profile
        </span>
      ),
    },
    {
      key: "4",
      label: (
        <span onClick={() => navigate("/")} style={{ textDecoration: "none" }}>
          Logout
        </span>
      ),
    },
  ];

  return (
    <Dropdown menu={{ items }} placement="bottom">
      <Button style={{ border: "none", outline: "none" }}>
        <i className="fa fa-user-circle fa-2x login-icon"></i>
      </Button>
    </Dropdown>
  );
};

export default UserDropdownComponent;
