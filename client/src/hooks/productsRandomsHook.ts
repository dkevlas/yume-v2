import { useContext } from "react"
import { productsRandomsContext } from "../context/productsRandomsContext"

export const useProductsRandoms = () => {
    const context = useContext(productsRandomsContext)
    console.log(context)
    if(!context){
        throw new Error('useProductsRandoms must be used within productsRandomsProvider');
    };
    return context
};