import React from "react";
import { cartContext } from "./cartContext";

export const CartProvider = ({
    children
}: { children: React.ReactNode}) =>{
    const lisa = "Lalisa"
    return (
        <cartContext.Provider
            value={{
                lisa
            }}
        >
            {children}
        </cartContext.Provider>
    )
}