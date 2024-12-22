import LoadingComp from "../components/others/LoadingComp"
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
        <div className="relative" >
            { 
                data?.success === false ? 
                <NotFound /> : 
                <ProductFilterTemplate />
            }
        </div>
    )
}
