import React from "react"
import { useCart } from "../../hooks/cartHook"
import ButtonEventComp from "../others/ButtonEventComp"

interface ListProductSelectedProps{
    children?: React.ReactNode,
    title?: string,
    img?: string,
    price?: number,
    mount?: number,
    id?: string
}

export default function ListProductsSelectedComp({
    title, img, price, mount, id
}: ListProductSelectedProps){
    const { dispatch } = useCart()
    return (
        <div className="bg-yume-neutral dark:bg-yume-deep-muted p-4 rounded-lg shadow-lg flex flex-col sm:flex-row items-center sm:items-start justify-between space-y-4 sm:space-y-0 sm:space-x-4 w-full min-w-[280px]">
            <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32">
                <img src={img} alt={title} className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="flex-1 w-full">
                <h3 className="text-sm sm:text-lg font-semibold text-gray-800 truncate sm:whitespace-normal">{title}</h3>
                <p className="text-xs sm:text-sm text-gray-500">Precio unitario: 💲{price?.toFixed(2)}</p>
                <p className="flex items-center space-x-2 mt-2 text-xs sm:text-sm">Cantidad: {mount} </p>
                <div className="flex items-center space-x-2 mt-2">
                    <ButtonEventComp 
                        action="➕" 
                        event={()=>{
                            dispatch?.({
                                type: "add", 
                                value: { 
                                    id: id 
                                }
                            })
                        }} 
                    />
                    <ButtonEventComp 
                        action="➖"
                        event={()=>{
                            dispatch?.({type: "decrement", value: {id: id}})
                        }}
                    />
                </div>
            </div>
            <div className="transition-colors duration-200 w-full sm:w-auto mt-2 sm:mt-0 sm:text-end">
                <p className="text-xs font-bold sm:text-sm text-gray-600 my-2">Subtotal: 💲{ mount && price ? (mount * price).toFixed(2) : "0"}</p>
                <ButtonEventComp
                    styles="w-full sm:w-auto bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 "
                    action="Eliminar"
                    event={()=>{
                        dispatch?.({
                            type: "remove",
                            value: {
                                id: id
                            }
                        })
                    }}
                />
            </div>
        </div>
    )
}