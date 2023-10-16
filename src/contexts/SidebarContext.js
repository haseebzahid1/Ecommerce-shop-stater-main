import React, { useState, createContext } from "react";

export const SidebarContext = createContext();
const SidebarProvider = ({ children }) => {
  // sidebar state
  const [isOpen, setIsopen] = useState(false);

  const handleClose = () => {
    setIsopen(false)
  };

  return (
    <SidebarContext.Provider 
      value={{isOpen, setIsopen, handleClose}} >
       {children}
    </SidebarContext.Provider>
  )
};

export default SidebarProvider;
