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
    </div>
  );
};

export default PromotionItem;
