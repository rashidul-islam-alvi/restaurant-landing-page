import React from "react";
import NextImage from "./ui/custom-image-component";
import Headline from "./ui/haedline";
import SubHeadline from "./ui/sub-headline";

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

const ProductDetails = ({ product }: ProductPros) => {
  return (
    <div className="min-h-screen flex px-10 py-10">
      <div className="w-1/2 flex justify-center">
        <NextImage
          alt={product.productImgAlt}
          path={product.productImg}
          className="w-[70%] h-[700px]"
        />
      </div>
      <div className="w-1/2 flex flex-col justify-center">
        <Headline headerText={product.name} className="text-6xl" />
        <SubHeadline subText={`form ${product.productPrice}$`} />
      </div>
    </div>
  );
};

export default ProductDetails;
