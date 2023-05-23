import React, { useState } from "react";
import Header from "../components/ui/Header";
import { toastError, toastSuccess } from "../lib/toastify";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/slices/productSlice";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const AddPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [newProductData, setNewProductData] = useState({
    name: "",
    code: "",
    manufactureYear: "",
    price: 0,
    image: "",
    desc: "",
  });

  const fields = [
    {
      label: "Name product",
      name: "name",
      type: "text",
      value: newProductData.name,
      placeholder: "iPhone...",
    },
    {
      label: "Code Unique",
      name: "code",
      type: "text",
      value: newProductData.code,
      placeholder: "ip0001...",
    },

    {
      label: "Price",
      name: "price",
      type: "number",
      value: newProductData.price,
      placeholder: "999...",
    },
    {
      label: "Manufacturer of Year",
      name: "manufactureYear",
      type: "text",
      value: newProductData.manufactureYear,
      placeholder: "...",
    },
    {
      label: "Image for product",
      name: "image",
      type: "text",
      value: newProductData.image,
      placeholder: "...",
    },
    {
      label: "Description",
      name: "desc",
      type: "text",
      value: newProductData.desc,
      placeholder: "Description of ...",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !newProductData.name ||
      !newProductData.image ||
      !newProductData.desc ||
      !newProductData.code ||
      !newProductData.manufactureYear ||
      newProductData.price === 0
    ) {
      toastError("Please typing all fields!!!");
      return;
    }
    dispatch(addProduct(newProductData));
    toastSuccess("New product added successfully!!!");
    navigate("/");
    return;
  };

  return (
    <div className="bg-gray-50 py-2 md:py-20 ">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0  z-10">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white flex items-center gap-2">
              <span className="cursor-pointer" onClick={() => navigate("/")}>
                <FiArrowLeft />
              </span>
              Add new product data
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              action="#"
              onSubmit={(e) => handleSubmit(e)}
            >
              {fields.map((field, index) => (
                <div key={index}>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    {field.label}
                  </label>
                  {field.name === "desc" ? (
                    <textarea
                      type={field.type}
                      name={field.name}
                      id={field.name}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder={field.placeholder}
                      rows={5}
                      defaultValue={field.value}
                      onChange={(e) =>
                        setNewProductData({
                          ...newProductData,
                          [e.target.name]: e.target.value,
                        })
                      }
                    ></textarea>
                  ) : (
                    <input
                      type={field.type}
                      name={field.name}
                      id={field.name}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder={field.placeholder}
                      value={field.value}
                      onChange={(e) =>
                        setNewProductData({
                          ...newProductData,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                  )}
                </div>
              ))}

              <button
                type="submit"
                className="w-full text-white bg-sky-700 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-sky-700 dark:hover:bg-sky-700 dark:focus:ring-primary-800"
              >
                ADD PRODUCT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPage;
