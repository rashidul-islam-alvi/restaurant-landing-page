import { productsList } from "@/data/products";

export const getSigngleProduct = (id: string) => {
  return productsList.find((product) => product.id === id);
};
