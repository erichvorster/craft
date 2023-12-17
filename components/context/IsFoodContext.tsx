"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface IsFoodContextProps {
  children: ReactNode;
}

interface IsFoodContextValue {
  isFood: boolean;
  setIsFood: React.Dispatch<React.SetStateAction<boolean>>;
}

const IsFoodContext = createContext<IsFoodContextValue | undefined>(undefined);

export const IsFoodProvider: React.FC<IsFoodContextProps> = ({ children }) => {
  const [isFood, setIsFood] = useState(true);

  const value: IsFoodContextValue = {
    isFood,
    setIsFood,
  };

  return (
    <IsFoodContext.Provider value={value}>{children}</IsFoodContext.Provider>
  );
};

export const useIsFoodContext = (): IsFoodContextValue => {
  const context = useContext(IsFoodContext);
  if (!context) {
    throw new Error("useIsFoodContext must be used within an IsFoodProvider");
  }
  return context;
};
