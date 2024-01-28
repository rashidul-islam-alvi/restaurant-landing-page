import { getSigngleProduct } from "@/actions/product";
import ProductDetails from "@/components/shop-product-details";
import ProductDetail from "@/components/shop-product-details";
import NextImage from "@/components/ui/custom-image-component";
import { productsList } from "@/data/products";

const page = ({ params }: { params: { productId: string } }) => {
  const product = getSigngleProduct(params.productId);
  console.log(product);

  if (!product) {
    return (
      <div>
        <h1>Product not found</h1>
      </div>
    );
  }

  return <ProductDetails product={product} />;
};

export default page;

export async function generateStaticParams() {
  return productsList.map((product) => ({
    productId: product.id,
  }));
}
