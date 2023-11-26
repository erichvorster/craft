import React from "react";
import { Button } from "./ui/button";

const ActionButton = () => {
  return (
    <div className="bg-foreground p-4 py-6 mb-16 rounded-lg shadow-lg">
      <div className="text-center text-white">
        <p className="text-xl mb-2 ">Sign up!</p>
        <p className="font-extrabold text-2xl">
          And get <span className="text-yellow-500/75">15%</span> on your first
          order
        </p>
        <Button className="mt-6 rounded-lg w-full px-12 bg-white text-foreground font-bold text-md">
          Sign up
        </Button>
      </div>
    </div>
  );
};

export default ActionButton;
