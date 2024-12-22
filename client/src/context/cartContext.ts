import { createContext } from "react";

interface CartContext{
    lisa?: string
}

export const cartContext = createContext<CartContext | null>(null);
