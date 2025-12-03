"use client";

import React, { useState, useEffect } from "react";
import { HeartOutlined, HeartFilled, ShoppingCartOutlined } from "@ant-design/icons";
import { Button, message } from "antd";
import type { Product } from "../../lib/products";
import Link from "next/link";

type Props = {
  products: Product[];
  limit?: number;
};

function addToCartItem(item: { id: string; name?: string; price: number; image?: string }) {
  try {
    const raw = localStorage.getItem("cart");
    const cart = raw ? JSON.parse(raw) : [];
    const existing = cart.find((c: any) => String(c.id) === String(item.id));
    if (existing) {
      existing.qty = (existing.qty || 1) + 1;
    } else {
      cart.push({ id: item.id, name: item.name, price: item.price, image: item.image, qty: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("storage"));
    try { message.success(`${item.name ?? 'Item'} added to cart`); } catch (e) {}
  } catch (e) {
    console.error("addToCart error", e);
    try { message.error('Failed to add to cart'); } catch (e) {}
  }
}

function addToFavorites(id: string) {
  try {
    const raw = localStorage.getItem("favorites");
    const favorites = raw ? JSON.parse(raw) : [];
    const idx = favorites.indexOf(id);
    if (idx > -1) {
      favorites.splice(idx, 1);
      message.info("Removed from favorites");
    } else {
      favorites.push(id);
      message.success("Added to favorites");
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
  } catch (e) {
    console.error("favorites error", e);
  }
}

export default function ProductsClient({ products = [] }: Props) {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("favorites");
      setFavorites(raw ? JSON.parse(raw) : []);
    } catch (e) {
      setFavorites([]);
    }
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      try {
        const raw = localStorage.getItem("favorites");
        setFavorites(raw ? JSON.parse(raw) : []);
      } catch (e) {
        setFavorites([]);
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  if (!products || products.length === 0) {
    return <div className="text-center text-gray-500 py-8">No products available</div>;
  }

  const toggleFavorite = (id: string) => {
    addToFavorites(id);
    const raw = localStorage.getItem("favorites");
    setFavorites(raw ? JSON.parse(raw) : []);
  };
  
  return (
    <div>
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((p) => {
          const isFavorite = favorites.includes(p.id);
          return (
            <div key={p.id} className="p-4">
              <Link href={`/products/${p.id}`}>
                <div className="w-[280px] h-[300px] rounded-[20px] bg-[#F0EEED] mb-4 flex items-center justify-center overflow-hidden cursor-pointer hover:opacity-80 transition">
                  <img src={p.image} alt={p.title ?? p.name} className="object-contain max-h-full" />
                </div>
              </Link>
              <h3 className="text-xl font-semibold text-black  mb-2">{p.title ?? p.name}</h3>
              <p className="text-[#ffc633]">★★★★★<span className="text-black ml-[10px]">4.9 (200) Reviews</span></p>
              <div className="text-lg mt-[10px] justify-between flex items-center font-medium text-black ">
                <span>${p.price}</span>
                <div className="flex items-center gap-2">
                  <Button 
                    onClick={() => toggleFavorite(p.id)}
                    style={{ color: isFavorite ? '#ff4d4f' : 'inherit' }}
                  >
                    {isFavorite ? <HeartFilled /> : <HeartOutlined />}
                  </Button>
                  <Button onClick={() => addToCartItem({ id: p.id, name: p.title ?? p.name, price: Number(p.price), image: p.image })}><ShoppingCartOutlined/></Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
