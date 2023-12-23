import React from "react";
import { useTabsContext } from "../components/context/TabsContext";
import { usePageContext } from "./context/PageContext";
import Link from "next/link";
import { foodTabs, drinkTabs } from "./Helpers";

const MoodBoard = () => {
  const { activePage, setActivePage } = usePageContext();
  const { activeTab, setActiveTab } = useTabsContext();

  const toggleMenuItem = (page: number, tab: number) => {
    setActivePage(page);
    setActiveTab(tab);
    window.scrollTo(0, 0);
  };

  return (
    <div className="mb-24">
      <h5 className="text-3xl font-bold mb-8">
        What are you in the mood for today?
      </h5>
      <div className="flex flex-wrap">
        {foodTabs.map((tab, index) => (
          <Link
            href="/"
            onTouchStart={() => {
              toggleMenuItem(1, index + 1);
            }}
          >
            <div className="px-4 py-2 mr-2 mt-2 bg-popover text-background rounded-full">
              <p className="text-lg">{tab}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MoodBoard;
