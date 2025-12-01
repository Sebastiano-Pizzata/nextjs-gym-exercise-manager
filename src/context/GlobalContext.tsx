"use client";
import { createContext, useContext } from "react";
import type { GlobalContextType } from "./GlobalProvider";

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

const useGlobalContext = (): GlobalContextType => {
    const context = useContext(GlobalContext)
    if (!context) {
        throw new Error("useGlobalContext deve essere usato all'interno di un GlobalProvider")
    }
    return context
}

export { GlobalContext, useGlobalContext };