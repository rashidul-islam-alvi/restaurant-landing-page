import React from "react";
import ProductCard from "./shop-product-card";
import { productsList } from "@/data/products";

const ShopProducts = () => {
  const products = productsList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  return <div className="grid grid-cols-3 px-10">{products}</div>;
};

export default ShopProducts;
