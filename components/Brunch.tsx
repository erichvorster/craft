import React from "react";
import CategoryHeader from "./CategoryHeader";
import { ItemDrawer } from "./ItemDrawer";
import brunch from "../public/brunch.jpg";
import Image from "next/image";

const Brunch = () => {
  const items = [1, 2, 3, 4, 5, 6];
  return (
    <div className="mt-18">
      <CategoryHeader
        headerText={"BRUNCH"}
        subText={"ONLY AVAILABLE BETWEEN 10:30 AND 13:00"}
      />
      <ItemDrawer>
        <div className="grid grid-cols-2 gap-4 mt-8">
          {items.map((itemm, idx) => (
            <div className=" flex flex-col card-shadow rounded-lg">
              <div>
                <Image
                  src={brunch}
                  height={250}
                  width={250}
                  alt="brunch"
                  className="rounded-tl-lg rounded-tr-lg"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between">
                  <h5 className="text-xl font-bold">Brunch Item</h5>
                  <h5 className="text-xl font-bold text-yellow-500">R 120</h5>
                </div>
                <p className="text-sm text-start mt-2">
                  Lorem ipsum, dolor sit amet consectetur dos adipisicing elit.
                  Accusamus sor fugit...
                </p>
              </div>
            </div>
          ))}
        </div>
      </ItemDrawer>
    </div>
  );
};

export default Brunch;
