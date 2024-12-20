import { createContext } from "react";
import { ResponseData } from "../interfaces/responseData.Interface";

interface ProductsRandomsContextValues {
    productsRandoms?: ResponseData
}

export const productsRandomsContext = createContext<ProductsRandomsContextValues | null>(null)