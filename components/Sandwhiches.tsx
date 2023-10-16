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

const Sandwhiches = () => {
  const items = [1, 2, 3, 4, 5];

  return (
    <>
      <CategoryHeader headerText={"SANDWHICHES, DOGS & LIGHTER MEALS"} />
      <Dialog>
        <DialogTrigger>
          <div className="mt-72">
            {items.map((item, idx) => (
              <div className="grid grid-cols-4 mt-8">
                <div className=" w-auto border border-primary rounded bg-foreground col-span-2"></div>
                <div className="col-span-2 ml-4">
                  <div className="flex justify-between">
                    <h5 className="text-xl font-bold">Snack Item</h5>
                    <h5 className="text-xl font-bold text-yellow-500">R 90</h5>
                  </div>
                  <p className="text-sm">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Accusamus fugit laudantium quae aperiam, neque magni unde
                    quas, ea consectetur minima quisquam deleniti numquam, ipsam
                    laboriosam doloremque explicabo quis provident sed!
                  </p>
                </div>
              </div>
            ))}
          </div>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </DialogTrigger>
        <DialogContent className=" w-11/12 h-5/6 rounded-lg border-primary border-2 bg-secondary">
          <DialogHeader>
            <DialogTitle className=""></DialogTitle>
            <DialogDescription className="p-4">
              <div className="h-64 w-full bg-primary rounded-lg relative"></div>
              <div className="flex justify-between items-center mt-8">
                <h3 className="text-4xl font-bold  text-primary">
                  Snack Item Name
                </h3>
                <p className="text-yellow-500/75 text-5xl font-bold">R99</p>
              </div>
              <div className="flex mt-6">
                <p className=" px-4 py-1 rounded-full text-sm bg-yellow-300/75  mr-2">
                  Jalapeno
                </p>
                <p className=" px-4 py-1 rounded-full text-sm bg-yellow-300/75  mr-2">
                  Cheese Sauce
                </p>
                <p className=" px-4 py-1 rounded-full text-sm bg-yellow-300/75  mr-2">
                  Mustard
                </p>
              </div>
              <div className="text-start text-md mt-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur repudiandae, voluptatibus aliquam, explicabo amet
                facere quam quaerat illum veniam adipisci provident magni iusto
                nostrum dicta ullam consequuntur numquam corporis ad in
                veritatis eum! Sunt, a dolorum in voluptatum non accusamus.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
                cumque officia fugit deleniti unde ipsum quam voluptatibus ut
                minus asperiores, nulla adipisci est esse id! Totam, eveniet
                voluptatum. Impedit, maiores?
              </div>
              <Button className="w-full mt-12">
                <MoveLeft className="mr-2" /> Back
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Sandwhiches;
