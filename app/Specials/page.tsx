import React from "react";
import Nav from "@/components/Nav";
import burgerSpecial from "@/public/burgerSpecial.png";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 tracking-wide">Events</h2>
      <Image width={300} height={600} src={burgerSpecial} alt="capital craft" />
    </div>
  );
};

export default page;
