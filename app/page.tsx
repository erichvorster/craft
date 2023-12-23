"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import CategoryNav from "@/components/CategoryNav";
import useScrollDirection from "@/components/Hooks/useScrollDirection";

import Snacks from "@/components/Snacks";
import Bowls from "@/components/Bowls";
import Brunch from "@/components/Brunch";
import Sandwhiches from "@/components/Sandwhiches";

import Carousel from "@/components/Carousel";
import Beer from "@/components/Beer";
import popularImages from "../public/popularImages";

import Gin from "@/components/Gin";
import Burgers from "@/components/Burgers";

import { Button } from "@/components/ui/button";
import Cap from "../public/cap.jpg";
import Btn from "@/components/Btn";
import MoodBoard from "@/components/MoodBoard";

import { useIsFoodContext } from "@/components/context/IsFoodContext";
import { useTabsContext } from "@/components/context/TabsContext";
import { usePageContext } from "@/components/context/PageContext";
import { foodTabs, drinkTabs } from "@/components/Helpers";

export default function Home() {
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const { activeTab, setActiveTab } = useTabsContext();
  const { activePage, setActivePage } = usePageContext();
  const [scrollPosition, setScrollPosition] = useState(0);
  const { isFood, setIsFood } = useIsFoodContext();

  const tabs = ["Food", "Drinks"];

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
            <div
              className="bg-card z-60 rounded-lg p-1 h-12
          flex"
            >
              {tabs.map((tab, index) => (
                <motion.div
                  key={index}
                  onTouchStart={() => setActivePage(index + 1)}
                  className={`${
                    activePage === index + 1 && "text-background"
                  }  px-4 py-[1px] w-full rounded whitespace-nowrap text-center text-foreground flex items-center justify-center cursor-pointer  relative`}
                >
                  {activePage === index + 1 && (
                    <motion.div
                      layoutId="bubbleNav"
                      className="absolute inset-0 z-40 text-white bg-card-foreground rounded-lg  flex justify-center "
                      transition={{ type: "tween", duration: 0.2 }}
                    />
                  )}
                  <p className="py-[1px] z-40 relative text-gray ">{tab}</p>
                </motion.div>
              ))}
            </div>
            <CategoryNav
              tabs={activePage === 1 ? foodTabs : drinkTabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>

          {activePage === 1 && (
            <div className="pt-12">
              {activeTab === 1 && (
                <>
                  <div className="mb-24">
                    <h1 className="text-6xl mb-2 font-bold">
                      CAPITAL
                      <br /> CRAFT
                    </h1>
                    <p className="text-md text-card-foreground">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Commodi, perspiciatis?
                    </p>
                    <div className="mt-8">
                      <Image src={Cap} alt="cap" className="rounded-lg" />
                    </div>
                    {/* <div className="mt-12">
                      <Btn btnText="Login" type="dark" />
                    </div> */}
                  </div>

                  {/* <ActionButton /> */}
                  <MoodBoard />
                  <Carousel images={popularImages} type="Event" />
                </>
              )}

              {(activeTab === 1 || activeTab === 2) && (
                <div className="mt-24">
                  <Brunch />
                </div>
              )}

              {/* {(activeTab === 1 || activeTab === 3) && (
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
              )} */}

              {/* {activeTab === 1 && (
               <div className="mt-24">
                 <EventCarousel images={eventImages} />
               </div>
             )} */}
            </div>
          )}

          {activePage === 2 && (
            <div className="pt-12">
              {(activeTab === 1 || activeTab === 2) && (
                <>
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
            </div>
          )}
        </Tabs>
      </div>
    </main>
  );
}
