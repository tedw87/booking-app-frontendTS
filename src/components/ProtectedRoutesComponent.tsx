import { Navigate, Outlet } from "react-router";

const ProtectedRoutesComponent = ({ userAuth = false }) => {
  return userAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutesComponent;
