import React from "react";
import Image from "next/image";

type ItemCardProps = {
  img: any;
};

const ItemCard = ({ img }: ItemCardProps) => {
  return (
    <div className=" flex flex-col card-shadow bg-white border-2 border-foreground/25 rounded">
      <div>
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
          <h5 className="text-xl font-bold">Brunch Item</h5>
          <p className="leading-3">Lorem ipsum dolor sit amet repellat...</p>
          <h5 className="text-xl font-bold text-yellow-500 pt-2">R 120</h5>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
