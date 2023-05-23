import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/ui/Header";
import { useSelector } from "react-redux";
import { toastError, toastSuccess } from "../lib/toastify";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editProduct } from "../redux/slices/productSlice";
import { FiArrowLeft } from "react-icons/fi";
const EditPage = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currentProduct, setCurrentProduct] = useState(null);
  useEffect(() => {
    const filtedProduct = products.filter(
      (product) => product.code.toLowerCase() === id.toLowerCase()
    );
    if (filtedProduct) setCurrentProduct(filtedProduct[0]);
  }, [id]);

  const fields = [
    {
      label: "Name product",
      name: "name",
      type: "text",
      value: currentProduct?.name,
      placeholder: "iPhone...",
    },
    {
      label: "Code Unique",
      name: "code",
      type: "text",
      value: currentProduct?.code,
      placeholder: "ip0001...",
    },

    {
      label: "Price",
      name: "price",
      type: "number",
      value: currentProduct?.price,
      placeholder: "999...",
    },
    {
      label: "Manufacturer of Year",
      name: "manufactureYear",
      type: "text",
      value: currentProduct?.manufactureYear,
      placeholder: "...",
    },
    {
      label: "Image for product",
      name: "image",
      type: "text",
      value: currentProduct?.image,
      placeholder: "...",
    },
    {
      label: "Description",
      name: "desc",
      type: "text",
      value: currentProduct?.desc,
      placeholder: "Description of ...",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !currentProduct.name ||
      !currentProduct.image ||
      !currentProduct.desc ||
      !currentProduct.code ||
      !currentProduct.manufactureYear ||
      currentProduct.price === 0
    ) {
      toastError("Please typing all fields!!!");
      return;
    }
    dispatch(editProduct(currentProduct));
    toastSuccess("New product added successfully!!!");
    navigate("/");
    return;
  };
  return (
    currentProduct && (
      <div className="bg-gray-50 py-2 md:py-20">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0  z-10">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white flex items-center gap-2">
                <span className="cursor-pointer" onClick={() => navigate("/")}>
                  <FiArrowLeft />
                </span>
                Edit product information
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
                          setCurrentProduct({
                            ...currentProduct,
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
                          setCurrentProduct({
                            ...currentProduct,
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
    )
  );
};

export default EditPage;
