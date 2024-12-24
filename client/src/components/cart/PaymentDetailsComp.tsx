import { useEffect, useState } from "react"
import { useCart } from "../../hooks/cartHook"
import { State } from "../../context/cartContext"

const calcTotal = (data: State[] | undefined) => {
    const filter = data?.map( p => {
        if(p.mount && p.price){
            const multi = p.price * p.mount
            return {totalProduct: multi, mount: p.mount}
        } else {
            return {totalProduct: 0, mount: 0}
        }
    }) || [{totalProduct: 0, mount: 0}]
    let suma = 0
    for( let i = 0; i < filter?.length ; i++){
        suma += filter[i].totalProduct
    }
    let envio = 0
    for(let i = 0; i < filter.length; i++){
        envio += filter[i].mount
    }
    return {suma, envio}
}
export default function PaymentDetailsComp(){
    const [ total, setTotal ] = useState<{shipping: number, priceProducts: number}>({shipping: 0, priceProducts: 0})
    const { state } = useCart()
    useEffect(()=>{
        const {suma, envio} = calcTotal(state)
        if(suma > 1000){
            setTotal({
                priceProducts: suma,
                shipping: 0
            })
        } else{
            setTotal({
                priceProducts: suma,
                shipping: 5 * envio
            })
        }
    }, [state])
    return (
        <section className="mb-8 max-w-[450px] mx-auto">
            <div className="flex justify-between text-lg font-medium text-gray-800">
                <span>Total de productos:</span>
                <span>$${total.priceProducts?.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg font-medium text-gray-800 mt-2">
                <span>Envío:</span>
                <span>${ total.shipping.toFixed(2) }</span>
            </div>
            <div className="flex justify-between text-2xl font-semibold text-gray-800 mt-4">
                <span>Total a pagar:</span>
                <span>${ (total.priceProducts + total.shipping).toFixed(2) || 0.00}</span>
            </div>
            <div className="mt-4 text-center text-green-500 font-semibold">
                <p>¡Envío gratis por compras mayores a $1000.00!</p>
            </div>
        </section>
    )
}