import React, { useEffect, useState } from "react"
import { productsByCategoryContext } from "./productsByCategoryContext"
import { useLocation } from "react-router-dom"
import { ResponseData } from "../interfaces/responseData.Interface"
import { getProductsByCategory } from "../services/ProductsService"

const categoryValues = ['todo', 'anime', 'figuras', 'mangas'];

export const ProductsByCategoryProvider = ({children}: {children: React.ReactNode}) => {
    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const valueCategory: string | null = params.get('categoria')
    const valuePage: string | null = params.get('pagina')
    const [ data, setData ] = useState<ResponseData | undefined>(undefined)
    const [ loading, setLoading ] = useState<boolean>(true)
    const [ error, setError ] = useState<boolean>(false)

    const filterCategory = async (valueCategory: string, valuePage: string) => {
        const response = await getProductsByCategory(valueCategory, valuePage)
        setData(response)
    }
    useEffect(()=>{
        if(valueCategory && valuePage && categoryValues.includes(valueCategory)){
            filterCategory(valueCategory, valuePage)
            setLoading(false)
        } else{
            setError(true)
        }
    }, [ valueCategory, valuePage ])
    return (
        <productsByCategoryContext.Provider
            value={{
                filterCategory,
                valueCategory,
                valuePage,
                data,
                loading,
                error
            }}
        >
            {children}
        </productsByCategoryContext.Provider>
    )
}