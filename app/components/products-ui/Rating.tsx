import React from 'react';
import { Tabs } from 'antd';
import { CheckCircleFilled, StarFilled } from '@ant-design/icons';

const Rating: React.FC = () => {
  const tabItems = Array.from({ length: 3 }).map((_, i) => {
    const id = String(i + 1);
    return {
      label: 'Rating & Reviews',
      key: id,
      children: (
        <div className="p-4">
          <h2 className="text-2xl font-semibold mb-4">All Reviews (451)</h2>
          <div className="flex flex-wrap gap-5 items-start">
            {Array.from({ length: 8 }).map((_, idx) => (
              <div
                key={idx}
                className="w-full md:w-[48%] border border-gray-200 p-6 rounded-lg flex flex-col gap-3"
              >
                <div className="flex items-center gap-2 text-[#FFC633]">
                  <StarFilled />
                  <StarFilled />
                  <StarFilled />
                  <StarFilled />
                  <StarFilled />
                </div>
                <div className="flex items-center gap-2 font-semibold">
                  <span>Sarah M.</span>
                  <CheckCircleFilled className="text-[#01AB31]" />
                </div>
                <p className="text-sm text-gray-700">
                  "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every
                  piece I've bought has exceeded my expectations."
                </p>
                <div className="text-xs text-gray-500">Posted on August 14, 2023</div>
              </div>
            ))}
          </div>
        </div>
      ),
    };
  });

  return <Tabs defaultActiveKey="1" centered items={tabItems} />;
};

export default Rating;
