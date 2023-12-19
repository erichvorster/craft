import React from "react";

type btnProps = {
  btnText: string;
  type: string;
};

const Btn = ({ type, btnText }: btnProps) => {
  return (
    <button
      className={
        type === "light"
          ? "bg-foreground rounded-lg w-full p-3 border-neutral-700 text-background  "
          : "p-3 w-full bg-background border border-card-foreground text-card-foreground rounded-lg"
      }
    >
      {btnText}
    </button>
  );
};

export default Btn;
