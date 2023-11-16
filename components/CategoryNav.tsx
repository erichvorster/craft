import React from "react";
import { motion } from "framer-motion";
import useScrollDirection from "./Hooks/useScrollDirection";

// Types
type CategoryHeaderProps = {
  tabs: string[];
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
};

const CategoryNav = ({
  tabs,
  activeTab,
  setActiveTab,
}: CategoryHeaderProps) => {
  const scrollDirection = useScrollDirection();

  return (
    <div className="overflow-hidden w-full h-full mt-4 px-1">
      <div className="overflow-x-scroll flex w-full h-full scrollbar-none">
        {tabs.map((tab, index) => (
          <motion.div
            key={index}
            onClick={() => setActiveTab(index + 1)}
            className={`${
              activeTab === index + 1 && " text-background"
            } mr-2 px-4 py-[1px] rounded whitespace-nowrap cursor-pointer text-sm relative`}
          >
            {activeTab === index + 1 && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 z-0 bg-foreground mix-blend-difference rounded-lg p-2"
                transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
              />
            )}
            {tab}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CategoryNav;
