import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const [isSubmenuOpen, setisSubmenuOpen] = useState(true);
  const opensidebar = () => {
    setIsSideBarOpen(true);
  };
  const closesidebar = () => {
    setIsSideBarOpen(false);
  };
  const opensubmenu = () => {
    isSubmenuOpen(true);
  };
  const closesubmenu = () => {
    isSubmenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSubmenuOpen,
        isSideBarOpen,
        opensidebar,
        opensubmenu,
        closesidebar,
        closesubmenu,
      }}>
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
