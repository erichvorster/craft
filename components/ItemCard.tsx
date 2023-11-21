import React from "react";
import Image from "next/image";
import vegan from "../public/vegan.png";
import chilli from "../public/chilli.png";
import newItem from "../public/new.png";

type ItemCardProps = {
  img: any;
  food?: any;
};

const ItemCard = ({ img, food }: ItemCardProps) => {
  console.log("food:", food);

  return (
    <div className="flex flex-col bg-white h-full">
      <div className="relative">
        <div className="px-2 py-1 flex rounded bg-yellow-300/75 border-2 border-black card-shadow absolute top-2 right-2">
          <>
            <Image src={vegan} height={20} width={20} alt="icon" />
            <span className="px-3">|</span>
          </>

          <>
            <Image src={chilli} height={20} width={20} alt="icon" />
            <span className="px-3">|</span>
          </>

          <Image src={newItem} height={20} width={25} alt="icon" />
        </div>

        <Image src={img} height={250} width={250} alt="brunch" />
      </div>
      <div>
        <div className="py-2 px-1">
          <h5 className="text-md tracking-wide font-bold">{food?.name}</h5>
          <h5 className="text-md text-zinc-500">Brunch</h5>
          <h5 className="text-lg text-yellow-500 mt-1">
            R {food?.fixedPrice?.price}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
