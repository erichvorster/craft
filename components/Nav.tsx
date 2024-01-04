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
import { foodTabs, drinkTabs } from "./Helpers";
import { useTabsContext } from "../components/context/TabsContext";
import { usePageContext } from "./context/PageContext";
import Btn from "./Btn";
import { TouchEvent } from "react";

const Nav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { activePage, setActivePage } = usePageContext();
  const { activeTab, setActiveTab } = useTabsContext();

  const toggleMenu = (e: TouchEvent<HTMLParagraphElement> | undefined) => {
    e?.preventDefault();
    setMenuOpen(!isMenuOpen);
  };

  const toggleMenuItem = (
    page: number,
    tab: number,
    e?: TouchEvent<HTMLParagraphElement> | undefined
  ) => {
    //@ts-ignore
    e.preventDefault();
    setActivePage(page);
    setActiveTab(tab);
    toggleMenu(e);
  };

  return (
    <div className="relative h-full z-50">
      <div className="flex justify-between items-center">
        <header className="text-2xl font-bold flex items-center  p-4">
          <p className="text-foreground ">CAPITAL CRAFT</p>
          <img
            src="/download.png"
            alt="logo"
            width="40"
            height="40"
            className="ml-4"
          />
        </header>
        <div
          className="burger-menu cursor-pointer p-4 z-50 relative mr-4 rounded-full border border-card"
          onTouchStart={toggleMenu}
        >
          <div
            className={`burger-line bg-card-foreground  ${
              isMenuOpen
                ? "rotate-45  bg-card-foreground   "
                : "-translate-y-[2px]"
            }`}
          ></div>

          <div
            className={`burger-line bg-card-foreground   ${
              isMenuOpen
                ? "-rotate-45 bg-card-foreground   "
                : "translate-y-[2px]"
            }`}
          ></div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="overlay fixed inset-0 bg-black bg-opacity-50 z-40">
          <nav className="menu fixed z-40 top-0 right-0 h-full w-full bg-background p-4">
            <header className="text-foreground text-2xl font-bold flex items-center">
              CAPITAL CRAFT{" "}
              <img
                src="/download.png"
                alt="logo"
                width="40"
                height="40"
                className="ml-4"
              />
            </header>
            <div className="mt-10">
              <Link href="/SignUp">
                <Btn btnText="Sign up" type="light" />
              </Link>
              <div className="mt-4" />
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
                      <div className="flex flex-col ">
                        <p
                          className="text-sm py-2 pl-3 text-card-foreground"
                          onClick={(e) => {
                            //@ts-ignore
                            toggleMenuItem(1, index + 1, e);
                          }}
                        >
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
                      <Link href="/">
                        <div className="flex flex-col ">
                          <p
                            className="text-sm py-2 pl-3 text-card-foreground"
                            onTouchStart={(e) => {
                              toggleMenuItem(2, index + 1, e);
                            }}
                          >
                            {tab}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Link href="/Events">
                <p
                  className=" text-white
                  py-4"
                >
                  Events
                </p>
                <Separator className="bg-card-foreground" />
              </Link>
              <Link href="/Bookings">
                <p
                  className=" text-white
          py-4"
                >
                  Bookings
                </p>
                <Separator className="bg-card-foreground" />
              </Link>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Nav;
