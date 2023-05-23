import React, { useState } from "react";
import Header from "../components/ui/Header";
import { useSelector } from "react-redux";
import data from "../asset/api/products.json";
import ProductsContainer from "../components/ProductsContainer";
import ProductFilter from "../components/ProductFilter";
import { Link } from "react-router-dom";
import Footer from "../components/ui/Footer";

function HomePage() {
  const products = useSelector((state) => state.product);
  const [tabType, setTabType] = useState("list");

  return (
    <div className="bg-[#f7f7f7]">
      <Header />
      <div className="container py-20">
        <ProductFilter tabUiState={{ tabType, setTabType }} />
        <ProductsContainer products={products} tabUiType={tabType} />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
