import React, { createContext } from "react";

export type Action = {
    type: "add" | "remove" | "clearCart" | "decrement",
    value?: State
}

export type State = {
    id?: string,
    title?: string,
    price?: number
    img?: string,
    mount?: number,
}

interface CartContextValues{
    state?: State[],
    dispatch?: React.Dispatch<Action>,
    checkProductInCart?: (id: string | undefined) => boolean | undefined
    productIn?: boolean,
    setProductIn?: (value: React.SetStateAction<boolean>) => void
}

export const cartContext = createContext<CartContextValues | null>(null);
