import React from "react";

type CategoryHeaderProps = {
  headerText: string;
  subText?: string;
};

const CategoryHeader = ({ headerText, subText }: CategoryHeaderProps) => {
  return (
    <>
      <div className="py-1 text-center text-3xl font-bold border-t-2 border-b-2 border-primary">
        {headerText}
      </div>
      {subText && (
        <div>
          <p className="text-center font-bold border-b-2 border-primary">
            {subText}
          </p>
        </div>
      )}
    </>
  );
};

export default CategoryHeader;
