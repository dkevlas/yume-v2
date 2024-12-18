import { useContext } from "react"
import { ProductFilterRandomContext } from "../context/api.ProductsRandomContext"

export const useProductFilterRandom = () => {
    const context = useContext(ProductFilterRandomContext)
    if(!context){
        throw new Error('useProductFilterRandom must be used within ProductFilterRandomProvider')
    }
    return context
}