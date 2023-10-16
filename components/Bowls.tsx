import React from "react";
import CategoryHeader from "./CategoryHeader";

const Bowls = () => {
  const items = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <div className="mt-72 pb-12">
        <CategoryHeader headerText={"BOWLS & SALADS"} />
        <div className="text-center mt-10">
          <h6 className="text-xl font-bold">POKE BOWL</h6>
        </div>
        <div className="text-center mt-6">
          <p className="underline-yellow-300">
            RED CABBAGE - CUCUMBER - BLACK RICE - CARROT RIBBONS
          </p>
          <p>CHERRY TOMATOES - EDAMAME BEANS - AVOCADO - RED ONION</p>
          <p>SWEET CORN - TERIYAKI, SOYA & PAPRIKA DRESSING</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-12">
          {items.map((item, index) => (
            <div className="rounded-lg flex flex-col items-center ml-2 py-4 shadow-lg">
              <div className="h-40 w-40 rounded-full bg-primary"></div>
              <h6 className="text-xl font-bold mt-4">PLAIN</h6>
              <p className="text-2xl font-bold text-yellow-500 mt-2">R90</p>
            </div>
          ))}
        </div>
      </div>
    </>  
  );
};

export default Bowls;
