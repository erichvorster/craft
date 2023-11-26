"use client";

import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Utensils,
  CalendarRange,
  BookOpenCheck,
  Gem,
  User2,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const Nav = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="flex justify-between items-center py-4 px-3">
      <img src="/download.png" alt="logo" width="35" height="35" />
      <Sheet>
        <SheetTrigger>
          <div className="cursor-pointer">
            <div className=" h-[3px] w-[25px] bg-primary mb-1"></div>
            <div className=" h-[3px] w-[25px] bg-primary mb-1"></div>
            <div className=" h-[3px] w-[25px] bg-primary mb-1"></div>
          </div>
        </SheetTrigger>
        <SheetContent className="bg-secondary">
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription className="text-left ">
              <div className=" h-full relative">
                <h1 className="text-primary text-2xl font-bold flex items-center">
                  CAPITAL CRAFT{" "}
                  <img
                    src="/download.png"
                    alt="logo"
                    width="40"
                    height="40"
                    className="ml-4"
                  />
                </h1>
                <ul className="mt-12">
                  <Link href="/">
                    <li
                      onClick={() => setActiveTab(1)}
                      className={`text-primary text-xl flex items-center p-2 rounded-md cursor-pointer ${
                        activeTab === 1 && "bg-yellow-300/25 "
                      }`}
                    >
                      <div
                        className={`p-2 rounded-full mr-2 ${
                          activeTab == 1 && "bg-yellow-500/75"
                        }`}
                      >
                        <Utensils color="#0D061D" size={22} />
                      </div>
                      <p
                        className={`${activeTab === 1 && "text-yellow-800/75"}`}
                      >
                        Menu
                      </p>
                    </li>
                  </Link>
                  <Link href="/Specials">
                    <li
                      onClick={() => setActiveTab(2)}
                      className={`text-primary text-xl flex items-center p-2 rounded-md cursor-pointer ${
                        activeTab === 2 && "bg-yellow-300/25 "
                      }`}
                    >
                      <div
                        className={`p-2 rounded-full mr-2 ${
                          activeTab == 2 && "bg-yellow-500/75"
                        }`}
                      >
                        <Gem color="#0D061D" size={22} />
                      </div>
                      <p
                        className={`${activeTab === 2 && "text-yellow-800/75"}`}
                      >
                        Specials
                      </p>
                    </li>
                  </Link>
                  <Link href="/Events">
                    <li
                      onClick={() => setActiveTab(3)}
                      className={`text-primary text-xl flex items-center p-2 rounded-md cursor-pointer ${
                        activeTab === 3 && "bg-yellow-300/25 "
                      }`}
                    >
                      <div
                        className={`p-2 rounded-full mr-2 ${
                          activeTab == 3 && "bg-yellow-500/75"
                        }`}
                      >
                        <CalendarRange color="#0D061D" size={22} />
                      </div>
                      <p
                        className={`${activeTab === 3 && "text-yellow-800/75"}`}
                      >
                        Events
                      </p>
                    </li>
                  </Link>
                  <Link href="/Bookings">
                    <li
                      onClick={() => setActiveTab(4)}
                      className={`text-primary text-xl flex items-center p-2 rounded-md cursor-pointer ${
                        activeTab === 4 && "bg-yellow-300/25 "
                      }`}
                    >
                      <div
                        className={`p-2 rounded-full mr-2 ${
                          activeTab == 4 && "bg-yellow-500/75"
                        }`}
                      >
                        <BookOpenCheck color="#0D061D" size={22} />
                      </div>
                      <p
                        className={`${activeTab === 4 && "text-yellow-800/75"}`}
                      >
                        Bookings
                      </p>
                    </li>
                  </Link>
                </ul>
              </div>

              <ul className="absolute bottom-5">
                <li
                  className={`text-primary text-xl flex items-center p-2 rounded-md cursor-pointer ${
                    activeTab === 4 && "bg-yellow-300/25 "
                  }`}
                >
                  <div
                    className={`p-2 rounded-full mr-2 ${"bg-yellow-500/75"}`}
                  >
                    <User2 color="#0D061D" size={22} />
                  </div>
                  <p>Jan Raap</p>
                </li>
              </ul>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Nav;
