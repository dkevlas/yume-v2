import { useContext } from "react"
import { ProductContext } from "../context/api.ProductsContext"

export const useProductFilter = () => {
    const context = useContext(ProductContext)
    if(!context){
        throw new Error('useProductFilter must be used within ProductProvider')
    }
    return context
}