import React from "react";

type CategoryHeaderProps = {
  headerText: string;
  subText?: string;
};

const CategoryHeader = ({ headerText, subText }: CategoryHeaderProps) => {
  return (
    <div className="mb-8">
      <div className="py-1 text-3xl font-bold border-primary tracking-wider text-foreground">
        {headerText}
      </div>
      {subText && (
        <div>
          <p className="text-card-foreground">{subText}</p>
        </div>
      )}
    </div>
  );
};

export default CategoryHeader;
