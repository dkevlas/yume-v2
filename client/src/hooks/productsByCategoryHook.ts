import { useContext } from "react"
import { productsByCategoryContext } from "../context/productsByCategoryContext"

export const useProductsByCategory = () => {
    const context = useContext(productsByCategoryContext)
    if(!context){
        throw new Error('useProductsByCategory must be used within productsByCategoryContext')
    }
    return context
}