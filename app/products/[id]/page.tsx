import React from "react";
import Link from "next/link";
import { getProduct } from "../../lib/products";
import ProductDetailClient from "../../components/products-ui/ProductDetailClient";
import Rating from "../../components/products-ui/Rating";

type Props = {
  params: { id: string };
};

export default async function ProductDetail({ params }: Props) {
  const resolvedParams = await Promise.resolve(params as any);
  const { id } = resolvedParams;
  let product;
  try {
    product = await getProduct(id);
  } catch (e) {
    const message = e instanceof Error ? e.message : String(e);
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-2">Product not found</h2>
          <p className="text-sm text-gray-500">{message}</p>
          <div className="mt-4">
            <Link href="/products" className="text-blue-600 underline">Back to products</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <main className="w-[85%] m-auto py-12">
        <ProductDetailClient product={product} />
      </main>

      <div className="w-[85%] m-auto py-6">
        <Rating />
        <div className="mt-4">
          <Link href="/allproducts" className="text-blue-600 underline">◁ Back to products</Link>
        </div>
      </div>
    </>
  );
}
