import React, { useState, useContext, createContext } from 'react'

const OwnContext = createContext();
const CreateContext = ({ children }) => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModelOpen, setIsModelOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  }
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  }
  const openModel = () => {
    setIsModelOpen(true);
  }
  const closeModel = () => {
    setIsModelOpen(false);
  }

  return (
    <OwnContext.Provider
      value={{
        isSidebarOpen,
        isModelOpen,
        openSidebar,
        closeSidebar,
        openModel,
        closeModel
      }}>
      {children}
    </OwnContext.Provider>
  )
}
// custom hook
export const useGlobalContext = () => {
  return useContext(OwnContext);
}

export { OwnContext, CreateContext }