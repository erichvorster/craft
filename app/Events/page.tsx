"use client";

import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import eventImages from "@/public/eventImages";
import Image from "next/image";

const page = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const events = [1, 2, 3, 4, 5];

  return (
    <div className="mx-auto w-11/12 mt-4">
      <h2 className="py-1 text-3xl font-bold border-primary tracking-wider text-foreground ml-2">
        Events
      </h2>
      <div className="pt-6">
        <h4 className="font-bold text-foreground mb-2 ml-2">MARCH</h4>
        <div className="bg-card-foreground grid grid-cols-3 rounded-lg px-8 py-6">
          <div className="col-span-1">
            <h5 className="text-5xl font-bold text-foreground">20</h5>
            <p className="text-foreground text-sm">MARCH</p>
          </div>
          <div className="col-span-2">
            <p className="text-lg text-white font-bold">Cheese Festival</p>
            <p className="text-xs text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="bg-foreground grid grid-cols-3 rounded-lg px-8 py-6 mt-2">
          <div className="col-span-1">
            <h5 className="text-5xl font-bold text-white">24</h5>
            <p className="text-white text-sm">MARCH</p>
          </div>
          <div className="col-span-2">
            <p className="text-lg text-white font-bold">Cheese Festival</p>
            <p className="text-xs text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
      <div className="pt-10">
        <h4 className="font-bold text-neutral-400 mb-2 ml-2">AUGUST</h4>
        <div className="bg-foreground grid grid-cols-3 rounded-lg px-8 py-6 mt-2">
          <div className="col-span-1">
            <h5 className="text-5xl font-bold text-white">24</h5>
            <p className="text-white text-sm">MARCH</p>
          </div>
          <div className="col-span-2">
            <p className="text-lg text-white font-bold">Cheese Festival</p>
            <p className="text-xs text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
      {/* <div>
        {eventImages.map((image, index) => (
          <div>
            <Image
              src={image}
              alt="Capital craft"
              className="rounded-lg mb-4 mx-auto card-shadow"
            />
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default page;
