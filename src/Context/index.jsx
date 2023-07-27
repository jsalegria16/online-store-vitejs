// PAra habilitar el ReactContextsdf
import React, { useState } from "react";
import { createContext } from "react";

const ShoppingCartContext = createContext()

export const ShoppingCartProvider =  ({children}) => { //Para proveer a los otros de la información
    
    //Shoppinc car number
    const [count, setCount] = useState(0)

    //Product Detail - Open/close window of product detail
    const [isProductDetailOpen, setIsProductDetailOpen ] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    //Show data in window of product detail
    const [showDataProducDetail, setShowDataProducDetail] = useState({})


    return(
        <ShoppingCartContext.Provider value = {{
            count,
            setCount,
            isProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            showDataProducDetail,
            setShowDataProducDetail
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export {ShoppingCartContext}
