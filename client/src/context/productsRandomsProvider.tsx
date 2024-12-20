import React, { useEffect, useState } from "react"
import { productsRandomsContext } from "./productsRandomsContext"
import { getProductsRandoms } from "../services/ProductsService"
import { ResponseData } from "../interfaces/responseData.Interface"

export const ProductsRandomsProvider = ({ children }: {children: React.ReactNode}) => {    
    const [ productsRandoms, setProductsRandoms ] = useState<ResponseData | undefined>(undefined)
    const productsHome = async () => {
        const response = await getProductsRandoms()
        setProductsRandoms(response)
    }
    useEffect(()=>{
        productsHome()
    }, [])
    return (
        <productsRandomsContext.Provider
            value={{
                productsRandoms
            }}
        >
            {children}
        </productsRandomsContext.Provider>
    )
}