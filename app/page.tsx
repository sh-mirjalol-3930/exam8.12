import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import Products from "./components/products/page";
import DrStyle from "./components/drStyle/DrStyle";
import Customers from "./components/customers/Customers";

export default async function Home() {

  return (
    <>
      <main className="bg-[#F2F0F1]">   
        <div className="w-[85%] m-auto flex justify-between">      
        <div className="w-[50%] py-[50px] flex flex-col items-start gap-4">
          <h2 className="text-[64px]  font-[700] text-black">FIND CLOTHES THAT MATCHES YOUR STYLE</h2>
          <p className="text-gray-700">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
          <Button type="primary" style={{ backgroundColor: 'black', borderRadius: '55px', padding: '20px 40px', fontSize: '16px' }}>Shop Now</Button>
          <div className="flex items-center">
            <div className="flex items-start flex-col">
              <b className="font-[700] text-[40px]">200+</b>
              <p className="font-[100] text-gray-700 text-[16px]">International Brands</p>
            </div>
            <div className="w-[1px] h-[80px] opacity-30 mx-[20px] bg-gray-700"></div>
            <div className="flex items-start flex-col">
              <b className="font-[700] text-[40px]">2,000+</b>
              <p className="font-[100] text-gray-700 text-[16px]">High-Quality Products</p>
            </div>
            <div className="w-[1px] h-[80px] opacity-30 mx-[20px] bg-gray-700"></div>
            <div className="flex items-start flex-col">
              <b className="font-[700] text-[40px]">30,000+</b>
              <p className="font-[100] text-gray-700 text-[16px]">Happy Customers</p>
            </div>
          </div>
        </div>
        <div className="h-[640px] overflow-hidden">
          <Image src="/mainJPG.jpg" alt="Home Image" width={500} height={500} />
        </div>
        </div>

        <div className="bg-black flex flex-col justify-center h-[150px]">
        <div className="flex w-[85%] justify-between m-auto items-center">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Versace_old_logo.svg/2560px-Versace_old_logo.svg.png" className="w-[200px] filter brightness-0 invert" alt="Versace Logo" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg" className="w-[105px] filter brightness-0 invert" alt="Versace Logo" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Gucci_Logo.svg/1280px-Gucci_Logo.svg.png" className="w-[220px] filter brightness-0 invert" alt="Versace Logo" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Prada-Logo.svg/2560px-Prada-Logo.svg.png" className="w-[220px] filter brightness-0 invert" alt="Versace Logo" />
          <img src="https://1000logos.net/wp-content/uploads/2021/11/Calvin-Klein-logo.png" className="w-[220px] filter brightness-0 invert" alt="Versace Logo" />
        </div>
        </div>
      </main>
      <section className="w-[85%] m-auto py-[50px]">
        <h2 className="font-[700] text-[48px] text-center">NEW ARRIVALS</h2>
        <Products limit={4} />
        <div className="mt-6 text-center">
          <Link href="/allproducts" className="text-blue-600 underline">
          <Button style={{ fontSize: '16px', borderRadius: '55px', padding: '20px 45px' }}>View all</Button>
          </Link>
        </div>
      </section>
      <div className="w-[85%] h-[2px] my-[20px] opacity-10 bg-[black] m-auto"></div>
      <section className="w-[85%] m-auto py-[50px]">
        <h2 className="font-[700] text-[48px] text-center">TOP SELLING</h2>
        <Products limit={4} />
        <div className="mt-6 text-center">
          <Link href="/allproducts" className="text-blue-600 underline">
          <Button style={{ fontSize: '16px', borderRadius: '55px', padding: '20px 45px' }}>View all</Button>
          </Link>
        </div>
      </section>
      <DrStyle />
      <Customers/>
    </>
  );
}
