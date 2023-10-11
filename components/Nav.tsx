import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Nav = () => {
  return (
    <div className="flex justify-between items-center py-4">
      <h1 className="text-2xl font-bold">CAPITAL CRAFT</h1>
      <Sheet>
        <SheetTrigger>
          <div className="cursor-pointer">
            <div className=" h-[3px] w-[25px] bg-primary mb-1"></div>
            <div className=" h-[3px] w-[25px] bg-primary mb-1"></div>
            <div className=" h-[3px] w-[25px] bg-primary mb-1"></div>
          </div>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you sure absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Nav;
