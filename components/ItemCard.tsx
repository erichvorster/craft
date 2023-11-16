import React from "react";
import Image from "next/image";
import vegan from "../public/vegan.png";
import chilli from "../public/chilli.png";

type ItemCardProps = {
  img: any;
  food?: any;
};

const ItemCard = ({ img, food }: ItemCardProps) => {
  console.log("food:", food);

  return (
    <div className="flex flex-col card-shadow bg-white rounded h-full">
      <div className="relative">
        <div className="px-2 py-1 flex rounded-full bg-background card-shadow absolute top-2 right-2">
          <Image src={vegan} height={20} width={20} alt="icon" />
          <span className="px-3">|</span>
          <Image src={chilli} height={20} width={20} alt="icon" />
        </div>
        <Image
          src={img}
          height={250}
          width={250}
          alt="brunch"
          className="rounded-tl rounded-tr"
        />
      </div>
      <div>
        <div className="p-2">
          <h5 className="text-xl font-bold">{food?.name}</h5>
          <h5 className="text-xl font-bold text-yellow-500 pt-2">
            R {food?.fixedPrice?.price}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
