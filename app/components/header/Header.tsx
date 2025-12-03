"use client";

import { SearchOutlined, ShoppingCartOutlined, UserOutlined, HeartOutlined } from '@ant-design/icons'
import { Input, Badge } from 'antd'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Header = () => {
  const [cartCount, setCartCount] = useState(0);
  const [favoriteCount, setFavoriteCount] = useState(0);

  useEffect(() => {
    const updateCounts = () => {
      try {
        const cartRaw = localStorage.getItem("cart");
        if (cartRaw) {
          const cart = JSON.parse(cartRaw);
          const count = cart.reduce((sum: number, item: any) => sum + (item.qty || 1), 0);
          setCartCount(count);
        } else {
          setCartCount(0);
        }

        const favRaw = localStorage.getItem("favorites");
        const favCount = favRaw ? JSON.parse(favRaw).length : 0;
        setFavoriteCount(favCount);
      } catch (e) {
        setCartCount(0);
        setFavoriteCount(0);
      }
    };

    updateCounts();
    window.addEventListener("storage", updateCounts);
    return () => window.removeEventListener("storage", updateCounts);
  }, []);
  return (
    <header>
        <div className='w-[85%] flex justify-between items-center m-auto py-[10px]'>
            <Link href="/" className="font-semibold text-black"><img src="/LOGOSHOP.CO.svg" alt="Logo"/></Link>
            <nav className="flex gap-[20px] items-center">
                <select name="shop" id="">
                    <option value="shop">shop</option>
                    <option value="work">work</option>
                    <option value="blog">blog</option>
                </select>
                <p>On Sale</p>
                <p>New Arrivals</p>
                <p>Brands</p>
            </nav>
            <div className="flex items-center px-[15px] gap-[10px] rounded-[20px] bg-[#F2F0F1]">
                <SearchOutlined className='text-[20px] opacity-70 text-gray'/>
                <input type="text" placeholder='Search for products...' className='p-[8px] w-[500px] focus:outline-none bg-[#F2F0F1]'/>
            </div>
            <div className="flex text-[20px] gap-6">
              <Link href="/cart" className="font-semibold text-black"><Badge count={cartCount}><ShoppingCartOutlined className='text-[20px]' /></Badge></Link>
              <Link href="/user" className="font-semibold text-black"><Badge count={favoriteCount}><UserOutlined className='text-[20px]'/></Badge></Link>
            </div>                                                                                                                    
        </div>
    </header>
  )
}

export default Header
