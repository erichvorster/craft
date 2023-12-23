import React, { useState } from "react";
import Image from "next/image";
import vegan from "../public/vegan.png";
import chilli from "../public/chilli.png";
import newItem from "../public/new.png";
import { Skeleton } from "./ui/skeleton";

type ItemCardProps = {
  img: any;
  food?: any;
};

const ItemCard = ({ img, food }: ItemCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="flex flex-col h-full rounded mb-4">
      <div className="relative">
        {/* <div className="px-2 py-1 flex rounded bg-yellow-300/75 border-2 border-black card-shadow absolute top-2 right-2">
          <Image src={vegan} height={20} width={20} alt="vegan icon" />
          <span className="px-3">|</span>
          <Image src={chilli} height={20} width={20} alt="chilli icon" />
          <span className="px-3">|</span>
          <Image src={newItem} height={20} width={25} alt="new item icon" />
        </div> */}
        <div className="h-[200px] w-auto rounded-lg">
          {!imageLoaded && <Skeleton />}
          <Image
            src={img}
            layout="fill"
            objectFit="cover"
            alt="food item"
            className="rounded-lg"
            onLoadingComplete={() => setImageLoaded(true)}
          />
        </div>
      </div>
      <div>
        <div className="pt-2">
          <h5 className="text-md tracking-wide text-foreground">
            {food?.name}
          </h5>
          <h5 className="text-sm text-card-foreground">Brunch</h5>
          <p className="text-md text-black mt-1 text-popover bg-popover-foreground inline-block py-[1px] px-3 rounded-full">
            R{food?.fixedPrice?.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
