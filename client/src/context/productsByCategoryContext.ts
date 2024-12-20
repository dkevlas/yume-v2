import { createContext } from "react";
import { ResponseData } from "../interfaces/responseData.Interface";

interface ProductsByCategoryValues{
    filterCategory?: (valueCategory: string, valuePage: string) => Promise<void>,
    valueCategory?: string | null,
    valuePage?: string | null,
    data?: ResponseData,
    loading?: boolean,
    error?: boolean

}
export const productsByCategoryContext = createContext<ProductsByCategoryValues | null>(null)