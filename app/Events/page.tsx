"use client";

import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import eventImages from "@/public/eventImages";
import Image from "next/image";

const page = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="mx-auto w-11/12 mt-4">
      <h2 className="text-2xl font-bold mb-4 tracking-wide">Events</h2>
      <div>
        {eventImages.map((image, index) => (
          <div>
            <Image
              src={image}
              alt="Capital craft"
              className="rounded-lg mb-4 mx-auto card-shadow"
            />
          </div>
        ))}
      </div>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    </div>
  );
};

export default page;
