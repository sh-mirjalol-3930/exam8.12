"use client";

import { useEffect, useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";

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

export default function CheckoutPage() {
  const [items, setItems] = useState<CartItem[]>([]);

  // FORM
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const raw = localStorage.getItem("cart");
    if (raw) setItems(JSON.parse(raw));
  }, []);

  const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0);
  const discount = 25; // figmadagidek fixed
  const shipping = 0; // free
  const total = subtotal - discount + shipping;

  return (
    <div className="w-[85%] m-auto py-10">
      <h1 className="text-[40px] font-bold text-center mb-12">Check Out</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT FORM */}
        <div className="border border-gray-300 rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-6">Contact Infomation</h2>

          {/* First + Last name */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-[12px] font-semibold block mb-1">FIRST NAME</label>
              <input
                type="text"
                placeholder="First name"
                value={first}
                onChange={(e) => setFirst(e.target.value)}
                className="w-full p-3 bg-gray-100 rounded"
              />
            </div>

            <div>
              <label className="text-[12px] font-semibold block mb-1">LAST NAME</label>
              <input
                type="text"
                placeholder="Last name"
                value={last}
                onChange={(e) => setLast(e.target.value)}
                className="w-full p-3 bg-gray-100 rounded"
              />
            </div>
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label className="text-[12px] font-semibold block mb-1">PHONE NUMBER</label>
            <input
              type="text"
              placeholder="Phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 bg-gray-100 rounded"
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="text-[12px] font-semibold block mb-1">EMAIL ADDRESS</label>
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-gray-100 rounded"
            />
          </div>

          {/* Button */}
          <button className="w-full bg-black text-white py-3 rounded-md font-semibold text-[16px]">
            Place Order
          </button>
        </div>

        {/* RIGHT SUMMARY */}
        <div className="border border-gray-300 rounded-lg p-6 h-fit">

          <h2 className="text-lg font-semibold mb-6">Order summary</h2>

          {/* Cart mini item — Figma-style */}
          {items.map((item) => (
            <div key={item.id} className="flex justify-between mb-6">
              <div className="flex items-center gap-2">
                <img
                  src={item.image}
                  alt=""
                  className="w-10 h-10 object-cover rounded"
                />
                <span className="text-sm font-medium">{item.name}</span>
              </div>

              <div className="text-right">
                <p className="text-green-600 text-sm">-${formatPrice(discount)}</p>
                <button
                  onClick={() => {
                    const filtered = items.filter((i) => i.id !== item.id);
                    setItems(filtered);
                    localStorage.setItem("cart", JSON.stringify(filtered));
                  }}
                  className="text-[12px] text-green-600"
                >
                  [Remove]
                </button>
              </div>
            </div>
          ))}

          {/* Shipping */}
          <div className="flex justify-between text-sm mb-3">
            <span>Shipping</span>
            <span className="font-semibold">Free</span>
          </div>

          {/* Subtotal */}
          <div className="flex justify-between text-sm mb-3">
            <span>Subtotal</span>
            <span className="font-semibold">${formatPrice(subtotal)}</span>
          </div>

          <hr className="my-3" />

          {/* TOTAL */}
          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>${formatPrice(total)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
