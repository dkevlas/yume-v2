import LoadingComp from "../components/others/LoadingComp"
import { BenefitsPayment } from "../components/product/BenefitsShippingPaymentComp"
import { useProductsByCategory } from "../hooks/productsByCategoryHook"
import ProductFilterTemplate from "../templates/shopping/ProductsFilterTemplate"
import NotFound from "./NotFound"

export default function ShoppingPage(){
    const { loading, error, data } = useProductsByCategory()
    if(error){
        return <NotFound />
    }
    if(loading){
        return (
            <LoadingComp />
        )
    }
    return (
        <>
            { 
                data?.success === false ? 
                <NotFound /> : 
                <>
                    <ProductFilterTemplate />
                    <BenefitsPayment />
                </>
            }
        </>
    )
}
