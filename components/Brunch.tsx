import React from "react";
import CategoryHeader from "./CategoryHeader";
import { ItemDrawer } from "./ItemDrawer";
import brunch from "../public/brunch.jpg";
import Image from "next/image";
import ItemCard from "./ItemCard";

const Brunch = () => {
  const items = [1, 2, 3, 4, 5, 6];
  return (
    <div className="mt-18">
      <CategoryHeader
        headerText={"BRUNCH"}
        subText={"ONLY AVAILABLE BETWEEN 10:30 AND 13:00"}
      />
      <ItemDrawer>
        <div className="grid grid-cols-2 gap-3 mt-8">
          {items.map((itemm, idx) => (
            <ItemCard img={brunch} />
          ))}
        </div>
      </ItemDrawer>
    </div>
  );
};

export default Brunch;
