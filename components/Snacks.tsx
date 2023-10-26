import React from "react";
import CategoryHeader from "./CategoryHeader";
import { ItemDrawer } from "./ItemDrawer";

const Snacks = () => {
  const items = [1, 2, 3, 4, 5];

  return (
    <div>
      <CategoryHeader headerText={"SNACKS"} />
      <ItemDrawer>
        {items.map((itemm, idx) => (
          <div className="grid grid-cols-3 mt-8">
            <div className=" w-auto border border-primary rounded-lg bg-foreground"></div>
            <div className="col-span-2 ml-4">
              <div className="flex justify-between">
                <h5 className="text-xl font-bold">Snack Item</h5>
                <h5 className="text-xl font-bold text-yellow-500">R 90</h5>
              </div>
              <p className="text-sm text-start">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Accusamus fugit laudantium quae aperiam, neque magni unde quas,
                ea consectetur minima quisquam deleniti numquam, ipsam
                laboriosam doloremque explicabo quis provident sed!
              </p>
            </div>
          </div>
        ))}
      </ItemDrawer>
    </div>
  );
};

export default Snacks;
