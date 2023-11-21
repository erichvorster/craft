import React from "react";
import CategoryHeader from "./CategoryHeader";
import { ItemDrawer } from "./ItemDrawer";
import Image from "next/image";
import ItemCard from "./ItemCard";
import burger from "../public/burger-2.jpg";
import MenuItems from "@/data/menu";

const Brunch = () => {
  const items = [1, 2, 3, 4, 5, 6];
  return (
    <div className="mt-18">
      <CategoryHeader
        headerText={"BRUNCH"}
        subText={"ONLY AVAILABLE BETWEEN 10:30 AND 13:00"}
      />

      <div className="grid grid-cols-2 gap-2 mt-8">
        {MenuItems.food.brunch.items.map((item, idx) => (
          <ItemDrawer food={item}>
            <ItemCard img={burger} food={item} />
          </ItemDrawer>
        ))}
      </div>
    </div>
  );
};

export default Brunch;
