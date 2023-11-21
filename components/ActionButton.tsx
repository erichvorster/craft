import React from "react";
import { Button } from "./ui/button";

const ActionButton = () => {
  return (
    <div className="border-2 border-foreground  p-4 py-6 mb-16 ">
      <div className="text-center">
        <p className="text-xl mb-2">Sign up!</p>
        <p className="font-extrabold text-2xl">
          And get <span className="text-yellow-500/75">15%</span> on your first
          order
        </p>
        <Button className="mt-6 rounded-full px-12 bg-foreground">
          Sign up
        </Button>
      </div>
    </div>
  );
};

export default ActionButton;
