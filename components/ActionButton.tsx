import React from "react";

const ActionButton = () => {
  return (
    <div className="border-2 border-foreground rounded-lg p-4 py-8 mb-12 card-shadow">
      <div className="text-center">
        <p className="text-xl mb-2">Sign up!</p>
        <p className="font-extrabold text-2xl">
          And get <span className="text-yellow-500/75">15%</span> on your first
          order
        </p>
      </div>
    </div>
  );
};

export default ActionButton;
