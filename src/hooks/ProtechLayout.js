import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedLayout = ({ children }) => {
  const isLogin = useSelector((state) => state.user);

  if (!isLogin.email) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedLayout;
