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
          ? "p-4 w-full bg-background text-black rounded"
          : "bg-foreground rounded p-4 border-neutral-700 text-white"
      }
    >
      {btnText}
    </button>
  );
};

export default Btn;
