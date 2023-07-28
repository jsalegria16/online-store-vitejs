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

    // Shopping car items - Add products
    const [shoppingCardProducts, setShoppingCardProducts] = useState([])
    
    //CarSide Menu - Open/close window 
    const [isCarSideMenuOpen, setIsCarSideMenuOpen] = useState(false)
    const openCarSideMenu = () => setIsCarSideMenuOpen(true)
    const closeCarSideMenu = () => setIsCarSideMenuOpen(false)

    // Shopping car Order.
    const [order, setOrder] = useState([]) //

    // I want to see a order, the actual order. 
    const [altualOrder, setActualOrder] = useState()


    return(
        <ShoppingCartContext.Provider value = {{
            count,
            setCount,
            isProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            showDataProducDetail,
            setShowDataProducDetail,
            shoppingCardProducts, 
            setShoppingCardProducts,
            isCarSideMenuOpen,
            openCarSideMenu,
            closeCarSideMenu,
            order,
            setOrder,
            setActualOrder,
            altualOrder

        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export {ShoppingCartContext}
