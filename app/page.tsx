"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Nav from "@/components/Nav";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CategoryHeader from "@/components/CategoryHeader";
import CategoryNav from "@/components/CategoryNav";
import useScrollDirection from "@/components/Hooks/useScrollDirection";
import AllItems from "@/components/AllItems";
import Snacks from "@/components/Snacks";
import Bowls from "@/components/Bowls";
import Brunch from "@/components/Brunch";
import Sandwhiches from "@/components/Sandwhiches";
import { ItemDrawer } from "@/components/ItemDrawer";

export default function Home() {
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const [isFood, setIsFood] = useState(true);
  const [activeTab, setActiveTab] = useState(1);

  const foodTabs = [
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
  const drinkTabs = ["ALL", "BEER", "GIN", "WHISKEY", "WINES", "SHOOTERS"];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setScrolledToTop(true);
      } else {
        setScrolledToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const items = [1, 2, 3, 4, 5];
  const scrollDirection = useScrollDirection();
  console.log(scrollDirection);

  return (
    <main className="min-h-screen px-2 py-2 relative">
      <div className="mt-4">
        <Tabs defaultValue="account" className="w-full ">
          <div
            className={`fixed z-0 top-0 left-0 right-0  bg-white p-4 ${
              scrollDirection === "down"
                ? "-translate-y-[120px]"
                : "translate-y-0"
            } ${
              scrolledToTop
                ? ""
                : "box-shadow transition-shadow duration-200 ease-in-out"
            }`}
          >
            <Nav />
            <TabsList className="w-full">
              <TabsTrigger
                value="account"
                className="w-full"
                onClick={() => setIsFood(true)}
              >
                FOOD
              </TabsTrigger>
              <TabsTrigger
                value="password"
                className="w-full"
                onClick={() => setIsFood(false)}
              >
                DRINKS
              </TabsTrigger>
            </TabsList>
            <CategoryNav
              tabs={isFood ? foodTabs : drinkTabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>
          <TabsContent value="account">
            {(activeTab === 1 || activeTab === 2) && <Brunch />}
            {(activeTab === 1 || activeTab === 3) && <Snacks />}
            {(activeTab === 1 || activeTab === 4) && <Bowls />}
            {(activeTab === 1 || activeTab === 5) && <Sandwhiches />}
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
