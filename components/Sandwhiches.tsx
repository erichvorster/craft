import React from "react";
import CategoryHeader from "./CategoryHeader";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { MoveLeft } from "lucide-react";
import { ItemDrawer } from "./ItemDrawer";

const Sandwhiches = () => {
  const items = [1, 2, 3, 4, 5];

  return (
    <>
      <CategoryHeader headerText={"SANDWHICHES, DOGS & LIGHTER MEALS"} />
      <ItemDrawer>
        <div>
          {items.map((item, idx) => (
            <div className="grid grid-cols-4 mt-8">
              <div className=" w-auto border border-primary rounded bg-foreground col-span-2"></div>
              <div className="col-span-2 ml-4">
                <div className="flex justify-between">
                  <h5 className="text-xl font-bold">Snack Item</h5>
                  <h5 className="text-xl font-bold text-yellow-500">R 90</h5>
                </div>
                <p className="text-sm text-start">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Accusamus fugit laudantium quae aperiam, neque magni unde
                  quas, ea consectetur minima quisquam deleniti numquam, ipsam
                  laboriosam doloremque explicabo quis provident sed!
                </p>
              </div>
            </div>
          ))}
        </div>
      </ItemDrawer>
    </>
  );
};

export default Sandwhiches;
