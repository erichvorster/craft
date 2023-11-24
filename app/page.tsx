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
import Carousel from "@/components/Carousel";
import Beer from "@/components/Beer";
import eventImages from "../public/eventImages";
import popularImages from "../public/popularImages";
import EventCarousel from "@/components/EventCarousel";
import ActionButton from "@/components/ActionButton";
import Gin from "@/components/Gin";
import Burgers from "@/components/Burgers";
import PromotionItem from "@/components/PromotionItem";

export default function Home() {
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const [isFood, setIsFood] = useState(true);
  const [activeTab, setActiveTab] = useState(1);
  const [scrollPosition, setScrollPosition] = useState(0);

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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const items = [1, 2, 3, 4, 5];

  const scrollDirection = useScrollDirection();

  const handleScroll = () => {
    const pxFromTop = window.scrollY;
    setScrollPosition(pxFromTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures the event listener is added only once

  return (
    <main className="min-h-screen px-2 py-2 relative">
      <div className="mt-4">
        <Tabs defaultValue="account" className="w-full ">
          <div
          // className={`fixed z-10 top-0 left-0 right-0 bg-white p-4 ${
          //   scrollDirection === "down"
          //     ? "-translate-y-[60px]"
          //     : "translate-y-0"
          // } ${
          //   scrolledToTop
          //     ? ""
          //     : "box-shadow transition-shadow duration-200 ease-in-out"
          // }`}
          >
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
          <TabsContent value="account" className="pt-12">
            {activeTab === 1 && (
              <>
                <ActionButton />
                <Carousel images={popularImages} type="Event" />
              </>
            )}

            {(activeTab === 1 || activeTab === 2) && (
              <div className="mt-24">
                <Brunch />
              </div>
            )}
            <PromotionItem />

            {(activeTab === 1 || activeTab === 3) && (
              <div className="mt-24">
                <Snacks />
              </div>
            )}
            {(activeTab === 1 || activeTab === 4) && (
              <div className="mt-24">
                <Bowls />
              </div>
            )}
            {(activeTab === 1 || activeTab === 5) && (
              <div className="mt-24">
                <Sandwhiches />
              </div>
            )}
            {(activeTab === 1 || activeTab === 6) && (
              <div className="mt-24">
                <Burgers />
              </div>
            )}

            {activeTab === 1 && (
              <div className="mt-24">
                <EventCarousel images={eventImages} />
              </div>
            )}
          </TabsContent>
          <TabsContent value="password" className="pt-12">
            {(activeTab === 1 || activeTab === 2) && (
              <>
                <h4 className="tracking-widest text-6xl font-extrabold text-center">
                  ICE COLD BEER
                </h4>
                <div className="mt-4">
                  <Beer />
                </div>
              </>
            )}
            {activeTab === 3 && (
              <>
                <div className="mt-4">
                  <Gin />
                </div>
              </>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
