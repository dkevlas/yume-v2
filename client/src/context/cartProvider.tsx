import React, { useEffect, useReducer } from "react";
import { Action, cartContext, State } from "./cartContext";

const valueInitial: State[] = []

const reducer = (state: State[], action: Action): State[] =>{
    const { type, value } = action
    switch(type){
        case "add" : {
            const productFound = state.findIndex( p => p.id == action.value?.id)
            const cloneState = state.map(item => {
                if(item.id == action.value?.id){
                    return {
                        ...item,
                        mount: item.mount ? item.mount + 1 : 0
                    }
                } else{
                    return item
                }
            })
            if(productFound === -1){
                return [
                    ...state,
                    {
                        mount: 1,
                        ...value
                    }
                ]
            } else{
                return cloneState
            }
        }
        case "remove": {
            const newCart = state.filter( item => {
                if(item.id !== value?.id){
                    return item
                }
            })
            if(newCart){
                return newCart
            } else{
                return state
            }
        }
        case "clearCart": { return [] }
        default: { return [] }
    }
}
export const CartProvider = ({
    children
}: { children: React.ReactNode}) =>{
    
    const [ state, dispatch ] = useReducer(reducer, valueInitial, ()=>{
        const cart = localStorage.getItem('cart')
        return cart ? JSON.parse(cart) : valueInitial
    })
    console.log(state)
    const checkProductInCart = (id: string | undefined): boolean | undefined =>{
        const productFound = state?.some( p => p.id == id)
        return productFound ? true : false
    }
    useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(state))
    }, [state])
    return (
        <cartContext.Provider
            value={{
                state,
                dispatch,
                checkProductInCart,
            }}
        >
            {children}
        </cartContext.Provider>
    )
}