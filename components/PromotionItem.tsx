import React from "react";
import event from "../public/event3.jpg";
import Image from "next/image";

const PromotionItem = () => {
  return (
    <div className="relative my-12">
      <Image
        src={event}
        layout="responsive"
        width={100}
        height={60}
        alt="Event Image"
      />
      <div className="absolute inset-0 flex flex-col justify-end bg-black bg-opacity-25 text-white">
        <p className="text-3xl font-bold">Tuesday Quiz Nights</p>
      </div>
    </div>
  );
};

export default PromotionItem;
