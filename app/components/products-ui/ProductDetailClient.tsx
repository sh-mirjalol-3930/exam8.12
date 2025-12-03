"use client";

import React, { useState } from "react";
import { message } from "antd";
import type { Product } from "../../lib/products";

type Props = {
  product: Product;
};

const COLORS = [
  { name: "Brown", hex: "#4F4631" },
  { name: "Green", hex: "#314F4A" },
  { name: "Blue", hex: "#31344F" },
];

const SIZES = ["Small", "Medium", "Large", "X-Large"];

function formatPrice(n: number | string) {
  const num = typeof n === "string" ? Number(n) : n;
  return isNaN(num) ? "0.00" : num.toFixed(2);
}

function saveCart(cart: any[]) {
  try {
    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("storage"));
  } catch (e) {
    // noop
  }
}

export default function ProductDetailClient({ product }: Props) {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handleAddToCart = () => {
    if (quantity < 1) {
      message.error("Quantity must be at least 1");
      return;
    }

    try {
      const raw = localStorage.getItem("cart");
      const cart = raw ? JSON.parse(raw) : [];

      const existing = cart.find((c: any) => String(c.id) === String(product.id));
      if (existing) {
        existing.qty = (existing.qty || 1) + quantity;
        existing.size = selectedSize ?? existing.size;
        existing.color = selectedColor ?? existing.color;
      } else {
        cart.push({
          id: product.id,
          name: product.title ?? product.name,
          price: Number(product.price),
          image: product.image,
          qty: quantity,
          size: selectedSize,
          color: selectedColor,
        });
      }

      saveCart(cart);
      message.success(`${quantity}x ${product.title ?? product.name} added to cart`);
      setQuantity(1);
    } catch (e) {
      console.error("Error adding to cart:", e);
      message.error("Failed to add to cart");
    }
  };

  const incrementQty = () => setQuantity((q) => q + 1);
  const decrementQty = () => setQuantity((q) => Math.max(1, q - 1));

  return (
    <div>
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="overflow-hidden bg-[#F0EEED] flex items-center justify-center">
          <img src={product.image} alt={product.title ?? product.name} className="object-contain max-h-[480px]" />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title ?? product.name}</h1>
          <p className="text-xl text-gray-800 font-semibold mb-4">${formatPrice(product.price)}</p>
          <div className="flex items-center">
            <span className="text-yellow-400 text-[23px]">★★★★★</span>
            <span className="text-black ml-[10px]">4.9 (200) Reviews</span>
          </div>
          <p className="text-gray-600 mb-6">{product.description}</p>

          <div className="w-[100%] h-[1px] bg-gray-300 my-6" />

          <div>
            <p className="font-semibold mb-3">Set colors</p>
            <div className="flex gap-3 mt-2">
              {COLORS.map((color) => (
                <button
                  type="button"
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={`w-10 h-10 rounded-full transition border-2 ${
                    selectedColor === color.name ? "border-black" : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color.hex }}
                  aria-label={`Choose color ${color.name}`}
                />
              ))}
            </div>
            {selectedColor && <p className="text-sm text-gray-600 mt-2">Selected: {selectedColor}</p>}
          </div>

          <div className="w-[100%] h-[1px] bg-gray-300 my-6" />

          <div>
            <p className="font-semibold mb-3">Choose size</p>
            <div className="flex gap-2 mt-2 flex-wrap">
              {SIZES.map((size) => (
                <button
                  type="button"
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-[30px] rounded-[50px] py-[10px] transition border-2 ${
                    selectedSize === size
                      ? "bg-black text-white border-black"
                      : "text-[#00000099] bg-[#F0F0F0] hover:bg-[#E0E0E0] border-gray-300"
                  }`}
                  aria-pressed={selectedSize === size}
                >
                  {size}
                </button>
              ))}
            </div>
            {selectedSize && <p className="text-sm text-gray-600 mt-2">Selected: {selectedSize}</p>}
          </div>

          <div className="w-[100%] h-[1px] bg-gray-300 my-6" />

          <div className="flex gap-4">
            <div className="flex justify-between w-[180px] items-center bg-[#F0F0F0] rounded-full px-4 py-2">
              <button type="button" className="text-[20px] font-bold py-[5px] px-[20px] transition" onClick={decrementQty} aria-label="Decrease quantity">
                −
              </button>
              <span className="font-semibold text-lg w-8 text-center">{quantity}</span>
              <button type="button" className="text-[20px] font-bold py-[5px] px-[20px] transition" onClick={incrementQty} aria-label="Increase quantity">
                +
              </button>
            </div>
            <button type="button" onClick={handleAddToCart} className="bg-black text-white px-8 w-full py-3 rounded-full font-semibold hover:bg-gray-800 transition">
              Add to cart
            </button>
          </div>

          <div className="mt-8" />
        </div>
      </div>
    </div>
  );
}
