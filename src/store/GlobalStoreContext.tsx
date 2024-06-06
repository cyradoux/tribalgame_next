import React, { ReactNode, useContext, useRef } from "react";
import { createContext } from "react";
import GlobalStore from "./globalStore";

// Créez le contexte pour GlobalStore
const GlobalStoreContext = createContext<GlobalStore | null>(null);

// Hook pour utiliser GlobalStore
export const useGlobalStore = (): GlobalStore => {
  const context = useContext(GlobalStoreContext);
  if (!context) {
    throw new Error("useGlobalStore must be used within a GlobalStoreProvider");
  }
  return context;
};

// Interface pour les props du provider
interface GlobalStoreProviderProps {
  children: ReactNode;
}

// Provider pour GlobalStore
export const GlobalStoreProvider = ({ children }: GlobalStoreProviderProps) => {
  const store = useRef(new GlobalStore());

  return (
    <GlobalStoreContext.Provider value={store.current}>
      {children}
    </GlobalStoreContext.Provider>
  );
};
