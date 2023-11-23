import React from "react";
import CategoryHeader from "./CategoryHeader";
import { ItemDrawer } from "./ItemDrawer";
import Image from "next/image";
import ItemCard from "./ItemCard";
import burger from "../public/burger-2.jpg";
import MenuItems from "@/data/menu";
import food from "@/public/food";

const Snacks = () => {
  const items = [1, 2, 3, 4, 5, 6];
  return (
    <div className="mt-18">
      <CategoryHeader headerText={"SNACKS"} />
      <ItemDrawer>
        <div className="grid grid-cols-2 gap-2 mt-8">
          {MenuItems.food.snacks.items.map((item, idx) => (
            <ItemDrawer food={item}>
              <ItemCard img={food[idx + 11]} food={item} />
            </ItemDrawer>
          ))}
        </div>
      </ItemDrawer>
    </div>
  );
};

export default Snacks;
