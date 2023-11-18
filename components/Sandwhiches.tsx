import React from "react";
import CategoryHeader from "./CategoryHeader";
import { ItemDrawer } from "./ItemDrawer";
import Image from "next/image";
import ItemCard from "./ItemCard";
import burger from "../public/burger-2.jpeg";

const Sandwhiches = () => {
  const items = [1, 2, 3, 4, 5, 6];
  return (
    <div className="mt-18">
      <CategoryHeader headerText={"SANDWHICHES, DOGS & LIGHTER MEALS"} />
      <ItemDrawer>
        <div className="grid grid-cols-2 gap-4 mt-8">
          {items.map((itemm, idx) => (
            <ItemCard img={burger} />
          ))}
        </div>
      </ItemDrawer>
    </div>
  );
};

export default Sandwhiches;
