// Nav.js

"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "./ui/separator";
import { useTabsContext } from "../components/context/TabsContext";
import { usePageContext } from "./context/PageContext";
import Btn from "./Btn";

const Nav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { activePage, setActivePage } = usePageContext();
  const { activeTab, setActiveTab } = useTabsContext();

  const foodTabs = [
    "All",
    "Brunch",
    "Snacks",
    "Bowls & Salads",
    "Sandwhiches Dogs & Lighter Meals",
    "Burgers",
    "Wings",
    "Ribs",
    "Steak",
    "Desert",
    "Kidies",
  ];

  const drinkTabs = ["All", "Beer", "Gin", "Whiskey", "Wines", "Shooters"];

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleMenuItem = (page: number, tab: number) => {
    setActivePage(page);
    setActiveTab(tab);
    toggleMenu();
  };

  return (
    <div className="relative h-full z-50">
      <div className="flex justify-between items-center">
        <header className="text-primary text-2xl font-bold flex items-center p-4">
          CAPITAL CRAFT{" "}
          <img
            src="/download.png"
            alt="logo"
            width="40"
            height="40"
            className="ml-4"
          />
        </header>

        <div
          className="burger-menu cursor-pointer p-4 z-50 relative mr-4 rounded-full border"
          onTouchStart={toggleMenu}
        >
          <div
            className={`burger-line bg-black  ${
              isMenuOpen ? "rotate-45  bg-neutral-300  " : "-translate-y-[2px]"
            }`}
          ></div>

          <div
            className={`burger-line bg-black  ${
              isMenuOpen ? "-rotate-45 bg-neutral-300  " : "translate-y-[2px]"
            }`}
          ></div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="overlay fixed inset-0 bg-black bg-opacity-50 z-40">
          <nav className="menu fixed z-40 top-0 right-0 h-full w-full bg-foreground p-4">
            <header className="text-white text-2xl font-bold flex items-center">
              CAPITAL CRAFT{" "}
              <img
                src="/download.png"
                alt="logo"
                width="40"
                height="40"
                className="ml-4"
              />
            </header>
            <div>
              <Btn btnText="Login" type="dark" />
            </div>
            <ul className="mt-20">
              <Accordion
                type="single"
                collapsible
                className="text-white relative z-50"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger className="relative z-50">
                    Food
                  </AccordionTrigger>
                  <AccordionContent>
                    {foodTabs.map((tab, index) => (
                      <Link
                        href="/"
                        onTouchStart={() => {
                          toggleMenuItem(1, index + 1);
                        }}
                      >
                        <div className="flex flex-col ">
                          <p className="text-sm py-2 pl-3 text-neutral-400">
                            {tab}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Drinks</AccordionTrigger>
                  <AccordionContent>
                    {drinkTabs.map((tab, index) => (
                      <Link
                        href="/"
                        onTouchStart={() => {
                          toggleMenuItem(2, index + 1);
                        }}
                      >
                        <div className="flex flex-col ">
                          <p className="text-sm py-2 pl-3 text-neutral-400">
                            {tab}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Link href="/Events" onTouchStart={() => toggleMenu()}>
                <p
                  className=" text-white
          py-4"
                >
                  Events
                </p>
                <Separator className="bg-neutral-600" />
              </Link>
              <Link href="/Bookings" onTouchStart={() => toggleMenu()}>
                <p
                  className=" text-white
          py-4"
                >
                  Bookings
                </p>
                <Separator className="bg-neutral-600" />
              </Link>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Nav;
