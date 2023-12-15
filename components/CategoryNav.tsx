import React, { useState, useRef, useEffect } from "react";
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
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [isScrolledToLeft, setIsScrolledToLeft] = useState(true);
  const [isScrolledToRight, setIsScrolledToRight] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const isLeft = container.scrollLeft === 0;
        const isRight =
          container.scrollLeft + container.clientWidth ===
          container.scrollWidth;

        setIsScrolledToLeft(isLeft);
        setIsScrolledToRight(isRight);
      }
    };

    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      container.addEventListener("scroll", handleScroll);
      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      container.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      container.scrollTo({
        left: container.scrollWidth,
        behavior: "smooth",
      });
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current !== null) {
      const touchEndX = e.touches[0].clientX;
      const deltaX = touchEndX - touchStartX.current;

      if (deltaX > 50) {
        handleScrollLeft();
      } else if (deltaX < -50) {
        handleScrollRight();
      }

      touchStartX.current = null;
    }
  };

  return (
    <div
      className="overflow-hidden w-full h-full mt-4 px-1 relative z-0"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div
        className="overflow-x-scroll flex w-full h-full scrollbar-none"
        ref={scrollContainerRef}
      >
        <div
          className={`w-12 bg-gradient-to-r from-transparent to-background absolute right-0 h-full z-50 ${
            isScrolledToRight ? "hidden" : ""
          }`}
          onTouchStart={handleScrollRight}
        />
        <div
          className={`w-12 bg-gradient-to-r from-background to-transparent absolute left-0 h-full z-50 ${
            isScrolledToLeft ? "hidden" : ""
          }`}
          onTouchStart={handleScrollLeft}
        />
        {tabs.map((tab, index) => (
          <motion.div
            key={index}
            onTouchStart={() => setActiveTab(index + 1)}
            className={`${
              activeTab === index + 1 && " text-background"
            } mr-2 px-4 py-[1px] rounded whitespace-nowrap cursor-pointer text-md relative`}
          >
            {activeTab === index + 1 && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 z-50 border-2 border-foreground rounded-lg flex justify-center"
                transition={{ type: "tween", duration: 0.2 }}
              />
            )}
            <p className="py-[1px]">{tab}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CategoryNav;
