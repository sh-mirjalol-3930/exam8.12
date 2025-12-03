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

export { default } from "../products-ui/ProductsClient";
