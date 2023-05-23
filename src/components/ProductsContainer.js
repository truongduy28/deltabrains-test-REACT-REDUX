import React from "react";
import ProductItem from "./ProductItem";

const ProductsContainer = ({ products, tabUiType }) => {
  return products ? (
    <div
      className={`flex ${
        tabUiType === "list" ? "flex-col" : "flex-row flex-wrap"
      } gap-3 px-4 md:px-[10%]`}
    >
      {products.map((product) => (
        <ProductItem
          key={product.code}
          product={product}
          tabUiType={tabUiType}
        />
      ))}
    </div>
  ) : (
    <h2>Don't have products</h2>
  );
};

export default ProductsContainer;
