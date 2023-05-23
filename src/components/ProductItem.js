import React, { useState } from "react";
import Button from "./ui/Button";
import { MdDeleteForever } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Dialog from "./ui/Dialog";

const ProductItem = ({ product, tabUiType }) => {
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <div
      className={` bg-white flex flex-wrap md:flex-nowrap shadow rounded-lg px-1 md:px-2 py-1 justify-between ${
        tabUiType === "list" ? "w-full" : " w-[48%] md:w-[32%] flex-col"
      }`}
    >
      <div
        className={` ${
          tabUiType === "list" ? "w-1/2 md:w-[25%]" : "w-full"
        } transition-all duration-400 `}
      >
        <img src={product.image} alt={product.name} />
      </div>
      <div style={{ flex: 1 }}>
        <h2
          className={`mb-4 ${
            tabUiType === "list"
              ? "text-2xl md:text-5xl"
              : "text-3xl text-center"
          } font-extrabold text-gray-900 t `}
        >
          {product.name}
        </h2>
        <p className="text-lg mb-2">
          Manufacture year: {product.manufactureYear}
        </p>
        <p className="text-lg mb-2">Price: {product.price}</p>
        <p className="italic hidden md:block">{product.desc}</p>
      </div>
      <div
        className={`flex gap-2 justify-center md:justify-start w-full md:w-fit items-center mt-2 md:mt-0 ${
          tabUiType === "list"
            ? "flex-row md:flex-col"
            : "flex-col md:flex-row justify-center mx-auto"
        }`}
      >
        <div onClick={() => navigate(`/edit/${product.code}`)}>
          <Button bg="bg-[#F7BE38]" hoverBg=" hover:bg-[#F7BE38]/90">
            <BiEditAlt /> Edit
          </Button>
        </div>
        <div onClick={() => setOpenDialog(true)}>
          <Button bg="bg-red-700" hoverBg="hover:bg-red-800">
            <MdDeleteForever /> Delete
          </Button>
        </div>
      </div>
      <Dialog
        dialogUiState={{ openDialog, setOpenDialog }}
        productId={product.code}
      />
    </div>
  );
};

export default ProductItem;
