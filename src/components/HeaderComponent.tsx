import { Link } from "react-router-dom";
import SearchGroupButtons from "./SearchGroupButtons.tsx";
import Logo from "../images/logo.png";
import "font-awesome/css/font-awesome.min.css";
import UserDropdownComponent from "./UserDropdownComponent.tsx";

const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="header-container">
        <Link to="/">
          <img className="logo-header" src={Logo} alt="logo-placeholder" />
        </Link>
        <SearchGroupButtons />
        <UserDropdownComponent />
      </div>
    </div>
  );
};

export default HeaderComponent;
