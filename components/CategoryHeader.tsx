import React from "react";

type CategoryHeaderProps = {
  headerText: string;
  subText?: string;
};

const CategoryHeader = ({ headerText, subText }: CategoryHeaderProps) => {
  return (
    <>
      <div className="py-1 text-3xl font-bold border-primary tracking-wider text-foreground">
        {headerText}
      </div>
      {subText && (
        <div>
          <p>{subText}</p>
        </div>
      )}
    </>
  );
};

export default CategoryHeader;
