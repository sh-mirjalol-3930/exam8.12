import { getProducts, Product } from "../../lib/products";
import ProductsClient from "./ProductsClient";

export default async function Products({ limit }: { limit?: number }) {
  const products: Product[] = await getProducts();
  const list = typeof limit === "number" ? products.slice(0, limit) : products;

  return <ProductsClient products={list} />;
}
