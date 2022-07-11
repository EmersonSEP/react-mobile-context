import { Children, createContext, useState } from "react";

type MainContextData = {
  showMenu: boolean;
  handleToggMenu: () => void;
};

type MainContextProvider = {
  children: React.ReactNode;
};

export const MainContext = createContext({} as MainContextData);

export function MainContextProvider({ children }: MainContextProvider) {
const [showMenu, setShowMenu] = useState(false);

function handleToggMenu() {
  setShowMenu((state) => !state);
}


  return (
    <MainContext.Provider
      value={{
        handleToggMenu,
        showMenu,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}
