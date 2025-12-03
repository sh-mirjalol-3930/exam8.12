"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { CheckCircleFilled, StarFilled } from "@ant-design/icons";

const Customers = () => {
    return (
        <>
    <div className="w-[85%] m-auto py-[50px]">
      <h2 className="font-[700] text-[48px] mb-10">OUR HAPPY CUSTOMERS</h2>
    </div>

            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                slidesPerView={5}
                spaceBetween={2}
                coverflowEffect={{
                    rotate: 25,
                    stretch: 10,
                    depth: -10,
                    modifier: 1,
                    slideShadows: false,
                }}
                modules={[EffectCoverflow, Pagination]}
                className="w-[100%]"
            >
        <SwiperSlide>
            <div className="border-1 p-6 rounded-[20px] flex flex-col scale-[0.8] gap-4">
                <div className="flex items-center gap-[5px] text-[#FFC633]">
                    <StarFilled/>
                    <StarFilled/>
                    <StarFilled/>
                    <StarFilled/>
                    <StarFilled/>
                </div>
                <div className="flex">Sarah M.<CheckCircleFilled className="text-[#01AB31]"/></div>
                <p>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="border-1 p-6 rounded-[20px] flex flex-col scale-[0.8] gap-4">
                <div className="flex items-center gap-[5px] text-[#FFC633]">
                    <StarFilled/>
                    <StarFilled/>
                    <StarFilled/>
                    <StarFilled/>
                    <StarFilled/>
                </div>
                <div className="flex">Sarah M.<CheckCircleFilled className="text-[#01AB31]"/></div>
                <p>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="border-1 p-6 rounded-[20px] flex flex-col scale-[0.8] gap-4">
                <div className="flex items-center gap-[5px] text-[#FFC633]">
                    <StarFilled/>
                    <StarFilled/>
                    <StarFilled/>
                    <StarFilled/>
                    <StarFilled/>
                </div>
                <div className="flex">Sarah M.<CheckCircleFilled className="text-[#01AB31]"/></div>
                <p>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="border-1 p-6 rounded-[20px] flex flex-col scale-[0.8] gap-4">
                <div className="flex items-center gap-[5px] text-[#FFC633]">
                    <StarFilled/>
                    <StarFilled/>
                    <StarFilled/>
                    <StarFilled/>
                    <StarFilled/>
                </div>
                <div className="flex">Sarah M.<CheckCircleFilled className="text-[#01AB31]"/></div>
                <p>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="border-1 p-6 rounded-[20px] flex flex-col scale-[0.8] gap-4">
                <div className="flex items-center gap-[5px] text-[#FFC633]">
                    <StarFilled/>
                    <StarFilled/>
                    <StarFilled/>
                    <StarFilled/>
                    <StarFilled/>
                </div>
                <div className="flex">Sarah M.<CheckCircleFilled className="text-[#01AB31]"/></div>
                <p>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="border-1 p-6 rounded-[20px] flex flex-col scale-[0.8] gap-4">
                <div className="flex items-center gap-[5px] text-[#FFC633]">
                    <StarFilled/>
                    <StarFilled/>
                    <StarFilled/>
                    <StarFilled/>
                    <StarFilled/>
                </div>
                <div className="flex">Sarah M.<CheckCircleFilled className="text-[#01AB31]"/></div>
                <p>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="border-1 p-6 rounded-[20px] flex flex-col scale-[0.8] gap-4">
                <div className="flex items-center gap-[5px] text-[#FFC633]">
                    <StarFilled/>
                    <StarFilled/>
                    <StarFilled/>
                    <StarFilled/>
                    <StarFilled/>
                </div>
                <div className="flex">Sarah M.<CheckCircleFilled className="text-[#01AB31]"/></div>
                <p>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="border-1 p-6 rounded-[20px] flex flex-col scale-[0.8] gap-4">
                <div className="flex items-center gap-[5px] text-[#FFC633]">
                    <StarFilled/>
                    <StarFilled/>
                    <StarFilled/>
                    <StarFilled/>
                    <StarFilled/>
                </div>
                <div className="flex">Sarah M.<CheckCircleFilled className="text-[#01AB31]"/></div>
                <p>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Customers;



















