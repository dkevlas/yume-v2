import { createContext } from "react";

interface ProductsByCategoryValues{
    lisa?: string

}
export const productsByCategoryContext = createContext<ProductsByCategoryValues | null>(null)