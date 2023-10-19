"use client";

import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

const page = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="mx-auto w-11/12 mt-12">
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
