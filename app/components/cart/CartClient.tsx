"use client"

import React, { useEffect, useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import Link from "next/link";

type CartItem = {
  id: string;
  name?: string;
  price: number;
  image?: string;
  qty: number;
};

function formatPrice(n: number) {
  return n.toFixed(2);
}

export default function CartClient() {
  const [items, setItems] = useState<CartItem[] | null>(null);
  const [promoCode, setPromoCode] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem("cart");
      if (raw) {
        setItems(JSON.parse(raw));
      } else {
        setItems([]);
      }
    } catch (e) {
      setItems([]);
    }
  }, []);

  useEffect(() => {
    if (items === null) return;
    try {
      localStorage.setItem("cart", JSON.stringify(items));
    } catch (e) {
    }
  }, [items]);

  if (items === null) {
    return <div>Loading cart...</div>;
  }

  const remove = (id: string) => setItems(items.filter((i) => i.id !== id));
  const changeQty = (id: string, qty: number) =>
    setItems(items.map((i) => (i.id === id ? { ...i, qty: Math.max(1, qty) } : i)));

  const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0);
  const discount = subtotal * 0.2;
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  if (items.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-lg">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div>
    <h1 className="text-[35px] font-bold mb-8">YOUR CART</h1>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-12">

      <div className="lg:col-span-2 border border-gray-200 bg-white p-6 rounded-lg">
        <div className="space-y-6">
          {items.map((it) => (
            <div key={it.id} className="flex gap-4 pb-6 border-b border-gray-200">
              <div className="w-24 h-24 bg-gray-100 rounded flex items-center justify-center overflow-hidden flex-shrink-0">
                {it.image ? (
                  <img src={it.image} alt={it.name} className="w-full h-full object-contain" />
                ) : (
                  <div className="text-xs text-gray-500">No image</div>
                )}
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-base mb-1">{it.name}</h3>
                <p className="text-xs text-gray-600 mb-2">Size: Large</p>
                <p className="text-xs text-gray-600 mb-2">Color: White</p>
                <p className="font-semibold text-base">${formatPrice(it.price)}</p>
              </div>

              <div className="flex flex-col items-end justify-between">
                <button
                  className="text-red-600 hover:text-red-700 mb-2"
                  onClick={() => remove(it.id)}
                  title="Remove item"
                  >
                  <DeleteOutlined style={{ fontSize: '20px' }} />
                </button>

                <div className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-2">
                  <button
                    className="text-gray-600 font-semibold"
                    onClick={() => changeQty(it.id, it.qty - 1)}
                  >
                    −
                  </button>
                  <span className="w-6 text-center text-sm">{it.qty}</span>
                  <button
                    className="text-gray-600 font-semibold"
                    onClick={() => changeQty(it.id, it.qty + 1)}
                    >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:col-span-1">
        <div className="bg-white p-6 rounded-lg border border-gray-200 sticky top-20">
          <h2 className="text-xl font-bold mb-6">Order Summary</h2>

          <div className="space-y-4 mb-6">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Subtotal</span>
              <span>${formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-red-600">Discount (-20%)</span>
              <span className="text-red-600">-${formatPrice(discount)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Delivery Fee</span>
              <span>${formatPrice(deliveryFee)}</span>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4 mb-6">
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>${formatPrice(total)}</span>
            </div>
          </div>

          <div className="flex gap-3 mb-4">
            <input
              type="text"
              placeholder="Add promo code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="flex-1 px-4 py-3 bg-gray-100 rounded text-sm placeholder-gray-400 border-0"
              />
            <button className="bg-black text-white px-6 py-3 rounded font-semibold">
              Apply
            </button>
          </div>
          <Link href="/checkout">
          <button className="w-full bg-black text-white py-4 rounded-full font-semibold text-lg hover:bg-gray-800">
            Go to Checkout →
          </button>
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
}
