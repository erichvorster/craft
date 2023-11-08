import React from "react";

type BeerHeaderProps = {
  title: string;
  desc?: string;
};

const BeerHeader = ({ title, desc }: BeerHeaderProps) => {
  return (
    <div className="flex flex-col text-center bg-neutral-800 text-white p-2">
      <h4 className="text-3xl font-extrabold">{title}</h4>
      <p className="text-sm">{desc}</p>
    </div>
  );
};

export default BeerHeader;
