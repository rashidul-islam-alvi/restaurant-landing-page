import React from "react";
import NextImage from "./ui/custom-image-component";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  productImg: string;
  productImgAlt: string;
  productDescription: string;
  productQuantity: number;
  productPrice: number;
}

interface ProductPros {
  product: Product;
}

const ProductCard = ({ product }: ProductPros) => {
  return (
    <Link href={`/shop/${product.id}`}>
      <div className="flex flex-col gap-10 items-center justify-center cursor-pointer hover:border-2 my-20 hover:border-red-200 duration-300 transition-all ease-in border-2 border-red-tomato">
        <NextImage
          path={product.productImg}
          alt={product.productImgAlt}
          className={` h-[650px]  ${
            product.id === "5" ? "w-[650px]" : "w-[450px]"
          }`}
        />
        <div className="flex flex-col justify-center gap-5 items-center">
          <h2 className="text-cream-base text-4xl uppercase  text-center">
            {product.name}
          </h2>
          <p className="text-cream-base text-3xl">
            <span className="text-xl">from</span> {product.productPrice} $
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
