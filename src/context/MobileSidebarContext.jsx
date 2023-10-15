import React, { createContext, useState } from "react";

export const MobileSidebarContext = createContext();

const MobileSidebarProvider = ({ children }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const handleCloseMobile = () => {
    setIsMobileOpen(false);
  };
  return (
    <MobileSidebarContext.Provider
      value={{ isMobileOpen, setIsMobileOpen, handleCloseMobile }}>
      {children}
    </MobileSidebarContext.Provider>
  );
};

export default MobileSidebarProvider;
