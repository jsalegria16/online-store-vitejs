// PAra habilitar el ReactContextsdf
import React from "react";
import { createContext } from "react";

const ShoppingCartContext = createContext()

export const ShoppingCartProvider =  ({children}) => { //Para proveer a los otros de la información

    return(
        <ShoppingCartContext.Provider>
            {children}
        </ShoppingCartContext.Provider>
    )
}
