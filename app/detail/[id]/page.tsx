import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getProduct } from "../../lib/products";

type Props = {
  params: { id: string };
};

export default async function DetailPage({ params }: Props) {
  const { id } = params;
  let product;
  try {
    product = await getProduct(id);
  } catch (e) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Product not found.</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-lg overflow-hidden bg-[#F0EEED] flex items-center justify-center p-6">
          <img src={product.image} alt={product.title ?? product.name} className="object-contain max-h-[480px]" />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title ?? product.name}</h1>
          <p className="text-xl text-gray-800 font-semibold mb-4">${product.price}</p>
          <p className="text-gray-600 mb-6">{product.description}</p>

          <div className="flex gap-4">
            <button className="bg-black text-white px-6 py-3 rounded">Add to cart</button>
            <button className="border px-6 py-3 rounded">Add to wishlist</button>
          </div>

          <div className="mt-8">
            <Link href="/allproducts" className="text-blue-600 underline">Back to products</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
