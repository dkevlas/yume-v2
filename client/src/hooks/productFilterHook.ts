import { useContext } from "react"
import { ProductFilterContext } from "../context/api.ProductFilterContext"

export const useProductFilter = () =>{
    const context = useContext(ProductFilterContext)
    if(!context){
        throw new Error('useProductFilter must be used within ProductFilterProvider');
    }
    return context
};
