import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const dispath = useDispatch();
  const navigate = useNavigate();
  const logedUser =
    useSelector((state) => state.user) ||
    JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    dispath(logout());
    navigate("/login");
  };
  return (
    <header className="flex justify-between items-center px-[5%] bg-white fixed top-0 left-0 right-0">
      <div className="w-[15%] min-w-[250px]">
        <img src="./images/logo-horizontal.jpg" alt="logo" />
      </div>
      <div className="flex items-center gap-2">
        <span className=" hidden md:block">
          Hello, <i>{logedUser.email}</i>
        </span>
        <span className="cursor-pointer" onClick={() => handleLogout()}>
          (logout)
        </span>
      </div>
    </header>
  );
};

export default Header;
