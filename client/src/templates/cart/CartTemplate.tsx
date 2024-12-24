import { ButtonsCTAComp, CartHeaderComp, PaymentBenefitsComp } from "../../components/cart/CartComponents"
import ListProductsSelectedComp from "../../components/cart/ListProductSelectedComp"
import PaymentDetailsComp from "../../components/cart/PaymentDetailsComp"
import ButtonEventComp from "../../components/others/ButtonEventComp"
import { useCart } from "../../hooks/cartHook"
import SectionProductsTemplate from "../home/SectionProductsTemplate"

export default function CartTemplate(){
    const { state, dispatch } = useCart()
    return (
        <div className="flex flex-col">
            <CartHeaderComp 
                title="¡Tu carrito está listo para comprar!"
                description="Revisa los productos que has añadido y procede al pago cuando estés listo."
            />
            <div className="space-y-6 grid max-w-[500px] mx-auto">
                { state?.map( (item, index)=> (
                    <ListProductsSelectedComp 
                        key={index}
                        img={item.img}
                        title={item.title}
                        mount={item.mount}
                        price={item.price}
                        id={item.id}
                    />
                ))}
            </div>
            <PaymentDetailsComp />
            <ButtonEventComp
                styles="bg-red-400 px-2 my-8 bg-transparent text-yume-deep dark:text-yume-neutral outline outline-2 outline-yume-deep dark:outline-yume-neutral hover:bg-yume-deep hover:text-yume-neutral dark:hover:bg-yume-neutral dark:hover:text-yume-deep w-fit mx-auto"
                action="Vaciar carrito"
                event={()=>{  dispatch?.({type: "clearCart"}) }}
            />
            <ButtonsCTAComp />
            <PaymentBenefitsComp />
            <SectionProductsTemplate subtitle="Productos Relacionados" styles="mt-16" />
        </div>
    )
}