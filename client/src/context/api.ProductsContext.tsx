import { createContext, ReactNode, useEffect, useState } from "react";
import { getProductsRandoms } from "../services/ProductsService";

interface ProductContextValues {
    productsRandoms?: any
}
export const ProductContext = createContext<ProductContextValues | null>(null)

export default function ProductProvider({children}: { children: ReactNode }){
    const [ productsRandoms, setProductsRandoms ] = useState()
    const productsHome = async () =>{
        const response = await getProductsRandoms()
        setProductsRandoms(response)

    }
    useEffect(()=>{
        productsHome()
    }, [])

    return (
        <ProductContext.Provider
            value={{
                productsRandoms
            }}
        >
            {children}
        </ProductContext.Provider>
    )
}