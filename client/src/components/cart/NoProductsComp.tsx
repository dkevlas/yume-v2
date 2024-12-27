import { CartEmpty, CartHeaderComp, PaymentBenefitsComp } from "./CartComponents";

export default function NoProductComp(){
    return (
        <div className="p-8">
            <CartHeaderComp 
                title="¡Tu carrito está vacío!"
                description="No te preocupes, puedes empezar a añadir productos a tu carrito de manera rápida y sencilla."
            />
            <CartEmpty />
            <PaymentBenefitsComp />
        </div>
    )
}