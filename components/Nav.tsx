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

import {
  Utensils,
  CalendarRange,
  BookOpenCheck,
  Gem,
  User2,
  User,
} from "lucide-react";
import Image from "next/image";

const Nav = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [isMenuOpen, setMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
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
        <div
          className="overlay fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        >
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
            <ul className="mt-20">
              <Link href="/">
                <Accordion type="single" collapsible className="text-white">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Food</AccordionTrigger>
                    <AccordionContent>
                      {foodTabs.map((tab, index) => (
                        <div className="flex flex-col ">
                          <p className="text-sm py-2 pl-3 text-neutral-400">
                            {tab}
                          </p>
                        </div>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Drinks</AccordionTrigger>
                    <AccordionContent>
                      {drinkTabs.map((tab, index) => (
                        <div className="flex flex-col ">
                          <p className="text-sm py-2 pl-3 text-neutral-400">
                            {tab}
                          </p>
                        </div>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </Link>
              <Link href="/Specials"></Link>
              <Link href="/Events">
                <p
                  className=" text-white
          py-4"
                >
                  Events
                </p>
                <Separator />
              </Link>
              <Link href="/Bookings">
                <p
                  className=" text-white
          py-4"
                >
                  Bookings
                </p>
                <Separator />
              </Link>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Nav;
