import React, { useContext, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { FilterContext } from "../../context/filter-context";

import "./ProductsList.css";

const ProductsList = () => {
  const { filteredProducts } = useContext(FilterContext);
  return (
    <div className="products-list">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductsList;
