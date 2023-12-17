"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface TabsContextProps {
  children: ReactNode;
}

interface TabsContextValue {
  activeTab: number;
  setActiveTab: Dispatch<SetStateAction<number>>;
}

const TabsContext = createContext<TabsContextValue | undefined>(undefined);

export const TabsProvider: React.FC<TabsContextProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(1);
  console.log(activeTab, "clicked");

  const value: TabsContextValue = {
    activeTab,
    setActiveTab,
  };

  return <TabsContext.Provider value={value}>{children}</TabsContext.Provider>;
};

export const useTabsContext = (): TabsContextValue => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("useTabsContext must be used within a TabsProvider");
  }
  return context;
};
