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
        <div className="flex flex-col sm:flex-row items-center justify-between border-b pb-4">
            <div className="flex items-center space-x-4 w-full sm:w-full justify-between mb-4 sm:mb-0 ">
                <div className="flex gap-1">
                    <img src={img} alt={title} className="w-24 h-24 object-cover rounded-md" />
                    <div>
                        <h3 className="text-lg font-medium text-gray-800">{title}</h3>
                        <p className="text-sm text-gray-600">Precio unitario: 💲{price?.toFixed(2)}</p>
                        <p className="text-sm text-gray-600">Cantidad: {mount} </p>
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
                <div className="text-right">
                    <p className="text-lg font-medium text-gray-800">Subtotal: ${ mount && price ? (mount * price).toFixed(2) : "0"}</p>
                    <ButtonEventComp
                        styles="text-sm text-red-500 mt-2"
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
        </div>
    )
}