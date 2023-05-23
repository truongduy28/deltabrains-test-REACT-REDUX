import { createSlice } from "@reduxjs/toolkit";
import data from "../../asset/api/products.json";

const initialState =
  localStorage.getItem("products") === null ||
  JSON.parse(localStorage.getItem("products")).length === 0
    ? data.products
    : JSON.parse(localStorage.getItem("products"));

export const prodductSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    getAllProducts: (state, action) => {
      state = action.payload;
      localStorage.setItem("products", JSON.stringify(state));
    },
    addProduct: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("products", JSON.stringify(state));
    },
    editProduct: (state, action) => {
      const updatedProduct = action.payload;
      const productIndex = state.findIndex(
        (product) => product.code === updatedProduct.code
      );
      if (productIndex !== -1) {
        state[productIndex] = { ...state[productIndex], ...updatedProduct };
      }
      localStorage.setItem("products", JSON.stringify(state));
    },
    deleteProduct: (state, action) => {
      const productId = action.payload;
      const productIndex = state.findIndex(
        (product) => product.code === productId
      );
      if (productIndex !== -1) {
        state.splice(productIndex, 1);
      }
      localStorage.setItem("products", JSON.stringify(state));
    },
  },
});

// Action creators are generated for each case reducer function
export const { getAllProducts, addProduct, editProduct, deleteProduct } =
  prodductSlice.actions;

export default prodductSlice.reducer;
