import NoProductComp from "../components/cart/NoProductsComp"
import { useCart } from "../hooks/cartHook"
import CartTemplate from "../templates/cart/CartTemplate"

export default function CartPage(){
    const { state } = useCart()
    return (
        <aside className="py-6 px-4">
            {
                state?.length ? 
                <CartTemplate /> :
                <NoProductComp />
            }
        </aside>
    )
}