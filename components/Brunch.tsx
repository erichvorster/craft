import React from "react";
import CategoryHeader from "./CategoryHeader";
import { ItemDrawer } from "./ItemDrawer";

const Brunch = () => {
  const items = [1, 2, 3, 4, 5];
  return (
    <div className="mt-18">
      <CategoryHeader
        headerText={"BRUNCH"}
        subText={"ONLY AVAILABLE BETWEEN 10:30 AND 13:00"}
      />
      <ItemDrawer>
        {items.map((itemm, idx) => (
          <div className="grid grid-cols-3 mt-4 card-shadow rounded-lg p-2">
            <div className=" w-auto border border-primary rounded-lg bg-foreground"></div>
            <div className="col-span-2 ml-4">
              <div className="flex justify-between">
                <h5 className="text-xl font-bold">Brunch Item</h5>
                <h5 className="text-xl font-bold text-yellow-500">R 120</h5>
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

export default Brunch;
