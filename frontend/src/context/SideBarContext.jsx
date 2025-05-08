import React from 'react';
import { createContext, useContext, useState } from 'react';



const SidebarContext = createContext();

const useSidebar = () => useContext(SidebarContext);



const SidebarProvider = ({ children }) => {
  const [ pageType, setPageType ] = useState('about');

  return (
    <SidebarContext.Provider value={{
      pageType,
      setPageType
    }} >

      { children}
    </SidebarContext.Provider>
  );
};




// exports here:
export {
  useSidebar,
  SidebarProvider,

};
