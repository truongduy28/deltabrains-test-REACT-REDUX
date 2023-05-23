import React from "react";
import { BsFillGridFill, BsListTask } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
import Button from "./ui/Button";
import { useNavigate } from "react-router-dom";

const ProductFilter = ({ tabUiState }) => {
  const { tabType, setTabType } = tabUiState;
  const navigate = useNavigate();
  const TABS = [
    {
      name: "List",
      activeIcon: <FaListUl color={"#fff"} />,
      icon: <FaListUl color={"#000"} />,
    },
    {
      name: "Gird",
      icon: <BsFillGridFill />,
      activeIcon: <BsFillGridFill color={"#fff"} />,
    },
  ];
  return (
    <div className="flex justify-between items-center px-[5%] pt-4 pt-0">
      <div>
        <h5 className="my-4 text-xl md:text-3xl font-semibold text-gray-900 uppercase">
          All products
        </h5>
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center gap-2">
        <div onClick={() => navigate("/add")}>
          <Button>Add new product</Button>
        </div>
        <div className="flex items-center border-[1px] bg-blue-500 rounded-lg bg-white overflow-hidden">
          {TABS.map((tab) => (
            <div
              className={`flex justify-center items-center px-2 py-1 cursor-pointer gap-2 ${
                tab.name.toLowerCase() === tabType ? "bg-blue-500" : "bg-white"
              } `}
              key={tab.name}
              onClick={() => setTabType(tab.name.toLowerCase())}
            >
              {tab.name.toLowerCase() === tabType ? tab.activeIcon : tab.icon}
              <span
                className={
                  tab.name.toLowerCase() === tabType
                    ? "text-white"
                    : "text-black"
                }
              >
                {tab.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
