import React, { useState } from "react";
import Link from "next/link";
import { useTabsContext } from "../components/context/TabsContext";
import { usePageContext } from "./context/PageContext";
import { foodTabs } from "./Helpers";

type TouchPosition = {
  x: number;
  y: number;
} | null;

const MoodBoard: React.FC = () => {
  const { setActivePage } = usePageContext();
  const { setActiveTab } = useTabsContext();
  const [touchStart, setTouchStart] = useState<TouchPosition>(null);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
  };

  const handleTouchEnd = (
    page: number,
    tab: number,
    e: React.TouchEvent<HTMLDivElement>
  ) => {
    if (touchStart) {
      const touchEnd = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY,
      };
      if (
        Math.abs(touchStart.x - touchEnd.x) < 10 &&
        Math.abs(touchStart.y - touchEnd.y) < 10
      ) {
        setActivePage(page);
        setActiveTab(tab);
        window.scrollTo(0, 0);
      }
    }
  };

  return (
    <div className="mb-24">
      <h5 className="text-3xl font-bold mb-8">
        What are you in the mood for today?
      </h5>
      <div className="flex flex-wrap">
        {foodTabs.map((tab, index) => (
          <Link href="/" key={index}>
            <div
              className="px-4 py-2 mr-2 mt-2 bg-popover-foreground text-popover rounded-full"
              onTouchStart={handleTouchStart}
              onTouchEnd={(e) => handleTouchEnd(1, index + 1, e)}
            >
              <p>{tab}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MoodBoard;
