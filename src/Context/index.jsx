// PAra habilitar el ReactContextsdf
import React, { useState } from "react";
import { createContext } from "react";

const ShoppingCartContext = createContext()

export const ShoppingCartProvider =  ({children}) => { //Para proveer a los otros de la información
    const [count, setCount] = useState(0)
    return(
        <ShoppingCartContext.Provider value = {{
            count,
            setCount
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export {ShoppingCartContext}
