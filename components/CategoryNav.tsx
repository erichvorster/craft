import React, { useState } from "react";
import useScrollDirection from "./Hooks/useScrollDirection";

const CategoryNav = () => {
  const [activeTab, setActiveTab] = useState(1);
  const scrollDirection = useScrollDirection();

  const tabs = [
    "ALL",
    "BRUNCH",
    "SNACKS",
    "BOWLS & SALADS",
    "SANDWHICHES DOGS & LIGHTERMEALS",
    "BURGERS",
    "WINGS",
    "RIBS",
    "STEAK",
    "DESERT",
    "KIDIES",
  ];
  return (
    <div className="overflow-hidden w-full h-full mt-4 ">
      <div className="overflow-x-scroll flex w-full h-full scrollbar-none">
        {tabs.map((tab, index) => (
          <div
            key={index}
            onClick={() => setActiveTab(index + 1)}
            className={`${
              activeTab === index + 1 && "bg-yellow-500/50"
            } mr-2 px-4 py-[1px] rounded whitespace-nowrap cursor-pointer text-sm`}
          >
            {tab}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryNav;
