import React from "react";
import { getProducts, Product } from "../../lib/products";
import { HeartOutlined, ShoppingCartOutlined, StarFilled } from "@ant-design/icons";
import { Button } from "antd";

type Props = {
  limit?: number;
};

export default async function Products({ limit }: Props) {
  const products: Product[] = await getProducts();
  const list = typeof limit === "number" ? products.slice(0, limit) : products;

  return (
    <div>
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {list.map((p) => (
          <div key={p.id} className="p-4">
            <div className="w-[280px] h-[300px] rounded-[20px] bg-[#F0EEED] mb-4 flex items-center justify-center overflow-hidden">
              <img src={p.image} alt={p.title ?? p.name} className="" />
            </div>
            <h3 className="text-xl font-semibold text-black  mb-2">{p.title ?? p.name}</h3>
            <p className="text-[#ffc633]"><StarFilled/><StarFilled/><StarFilled/><StarFilled/><StarFilled/><span className="text-black ml-[10px]">4.9 (200) Reviews</span></p>
            <div className="text-lg mt-[10px] justify-between flex items-center font-medium text-black ">
              <span>${p.price}</span>
              <div className="flex items-center gap-2">
              <Button><HeartOutlined/></Button>
              <Button><ShoppingCartOutlined/></Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
