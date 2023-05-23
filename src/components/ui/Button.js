import React from "react";

const Button = ({
  children,
  bg = "bg-blue-500",
  hoverBg = "hover:bg-blue-700",
}) => {
  return (
    <button
      className={` ${bg} ${hoverBg} text-white  py-2 px-4 rounded flex items-center gap-2`}
    >
      {children}
    </button>
  );
};

export default Button;
