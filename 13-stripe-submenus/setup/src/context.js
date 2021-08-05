import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isSubmenuOpen, setisSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: "", links: [] });
  const opensidebar = () => {
    setIsSideBarOpen(true);
  };
  const closesidebar = () => {
    setIsSideBarOpen(false);
  };
  const opensubmenu = (text, Coordinates) => {
    const page = sublinks.find((link) => link.page === text);
    setPage(page);
    setLocation(Coordinates);
    setisSubmenuOpen(true);
  };
  const closesubmenu = () => {
    setisSubmenuOpen(false);
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
        location,
        page,
      }}>
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
