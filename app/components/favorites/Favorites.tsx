"use client";

import React, { useEffect, useState } from 'react';
import { HeartFilled, ShoppingCartOutlined, DeleteOutlined } from '@ant-design/icons';
import { Button, message } from 'antd';
import type { Product } from '../../lib/products';
import Link from 'next/link';

const Favorites = () => {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const [favoriteProducts, setFavoriteProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("favorites");
      const ids = raw ? JSON.parse(raw) : [];
      setFavoriteIds(ids);
    } catch (e) {
      setFavoriteIds([]);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    const fetchFavoriteProducts = async () => {
      if (favoriteIds.length === 0) {
        setFavoriteProducts([]);
        return;
      }

      try {
        const res = await fetch(
          "https://68f19be0b36f9750dee9beb3.mockapi.io/franki/products",
          { cache: "no-store" }
        );
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        const filtered = data.filter((p: Product) => favoriteIds.includes(p.id));
        setFavoriteProducts(filtered);
      } catch (e) {
        console.error("Error fetching favorite products:", e);
        setFavoriteProducts([]);
      }
    };

    fetchFavoriteProducts();
  }, [favoriteIds]);

  useEffect(() => {
    const handleStorageChange = () => {
      try {
        const raw = localStorage.getItem("favorites");
        const ids = raw ? JSON.parse(raw) : [];
        setFavoriteIds(ids);
      } catch (e) {
        setFavoriteIds([]);
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const removeFavorite = (id: string) => {
    try {
      const updated = favoriteIds.filter(fid => fid !== id);
      localStorage.setItem("favorites", JSON.stringify(updated));
      setFavoriteIds(updated);
      message.success("Removed from wishlist");
    } catch (e) {
      console.error("Error removing favorite:", e);
    }
  };

  const addToCart = (item: Product) => {
    try {
      const raw = localStorage.getItem("cart");
      const cart = raw ? JSON.parse(raw) : [];
      const existing = cart.find((c: any) => String(c.id) === String(item.id));
      if (existing) {
        existing.qty = (existing.qty || 1) + 1;
      } else {
        cart.push({
          id: item.id,
          name: item.title ?? item.name,
          price: Number(item.price),
          image: item.image,
          qty: 1
        });
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      window.dispatchEvent(new Event("storage"));
      message.success(`${item.title ?? item.name} added to cart`);
    } catch (e) {
      console.error("Error adding to cart:", e);
      message.error("Failed to add to cart");
    }
  };

  if (loading) {
    return <div className="py-12 text-center">Loading wishlist...</div>;
  }

  if (favoriteIds.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-lg text-gray-600 mb-4">Your wishlist is empty</p>
        <Link href="/products">
          <Button type="primary" style={{ backgroundColor: 'black', borderRadius: '55px', padding: '20px 40px' }}>
            Continue Shopping
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12">
      <h1 className="text-3xl font-bold mb-8">MY WISHLIST</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {favoriteProducts.map((p) => (
          <div key={p.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition">
            <Link href={`/products/${p.id}`}>
              <div className="w-full h-[280px] rounded-[15px] bg-[#F0EEED] mb-4 flex items-center justify-center overflow-hidden cursor-pointer">
                <img src={p.image} alt={p.title ?? p.name} className="object-contain max-h-full hover:scale-105 transition" />
              </div>
            </Link>
            <h3 className="text-lg font-semibold text-black mb-2">{p.title ?? p.name}</h3>
            <p className="text-[#ffc633] mb-2">★★★★★<span className="text-black ml-[10px] text-sm">4.9 (200)</span></p>
            <div className="flex justify-between items-center mb-3">
              <span className="text-lg font-semibold text-black">${p.price}</span>
              <button
                onClick={() => removeFavorite(p.id)}
                className="text-red-600 hover:text-red-700"
                title="Remove from wishlist"
              >
                <DeleteOutlined style={{ fontSize: '18px' }} />
              </button>
            </div>
            <Button
              block
              onClick={() => addToCart(p)}
              style={{ backgroundColor: 'black', color: 'white', borderRadius: '50px' }}
            >
              <ShoppingCartOutlined /> Add to Cart
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
