import Image from 'next/image'
import React from 'react'

const DrStyle = () => {
  return (
    <div className='w-[85%] bg-[#F0F0F0] rounded-[20px] px-[40px] py-[40px] m-auto'>
      <h2 className='font-[700] text-[48px] text-center'>BROWSE BY dress STYLE</h2>
      <div className="flex justify-between mt-[30px] items-center">
      <Image src="/pic1.png" alt="" width={440} height={400}/>
      <Image src="/pic2.png" alt="" width={750} height={400}/>
      </div>
      <div className="flex justify-between mt-[30px] items-center">
      <Image src="/pic4.png" alt="" width={750} height={400}/>
      <Image src="/pic3.png" alt="" width={440} height={400}/>
      </div>
    </div>
  )
}

export default DrStyle
