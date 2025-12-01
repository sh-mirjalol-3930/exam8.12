"use client";

import { SearchOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import Link from 'next/link'
import React from 'react'

const Header = () => {
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
              <Link href="/cart" className="font-semibold text-black"><ShoppingCartOutlined /></Link>
              <Link href="/user" className="font-semibold text-black"><UserOutlined/></Link>
            </div>                                                                                                                    
        </div>
    </header>
  )
}

export default Header
