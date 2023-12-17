"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface PageContextProps {
  children: ReactNode;
}

interface PageContextValue {
  activePage: number;
  setActivePage: Dispatch<SetStateAction<number>>;
}

const PageContext = createContext<PageContextValue | undefined>(undefined);

export const PageProvider: React.FC<PageContextProps> = ({ children }) => {
  const [activePage, setActivePage] = useState(1);

  const value: PageContextValue = {
    activePage,
    setActivePage,
  };

  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};

export const usePageContext = (): PageContextValue => {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error("usePageContext must be used within a PageProvider");
  }
  return context;
};
