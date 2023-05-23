import React from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../redux/slices/productSlice";
import { toastSuccess } from "./../../lib/toastify";

const Dialog = ({ dialogUiState, productId }) => {
  const { openDialog, setOpenDialog } = dialogUiState;
  const dispath = useDispatch();

  const handleDeleteProduct = () => {
    dispath(deleteProduct(productId));
    setOpenDialog(false);
    toastSuccess("Delete Product successfully!!!");
  };
  return (
    <div
      className={`fixed top-0 right-0 left-0 bottom-0 bg-gray-500/30  transition-all z-20 ${
        openDialog ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white p-4 rounded-xl z-30">
        <div>
          <h3 className="text-xl font-semibold ">Remove product!</h3>
          <p className="mb-5 mt-2">
            Product will no longer in store! Do you comfirm?
          </p>
        </div>
        <div className="flex justify-end gap-2">
          <div onClick={() => setOpenDialog(false)}>
            <Button>Cancel</Button>
          </div>
          <div onClick={() => handleDeleteProduct()}>
            <Button>Comfirm</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
