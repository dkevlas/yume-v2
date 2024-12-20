import ButtonFilterComp from "../../components/shopping/ButtonFilterComp";
import PaginationComp from "../../components/shopping/PaginationComp";
import ShowProductsFilteredComp from "../../components/shopping/ShowProductsFilteredComp";
import { useProductsByCategory } from "../../hooks/productsByCategoryHook";

export default function ProductFilterTemplate(){
    const { data } = useProductsByCategory()
    return(
        <section>
            <ButtonFilterComp />
            <ShowProductsFilteredComp products={data} />
            <PaginationComp length={ data?.countDocuments ? data?.countDocuments : 0} />
        </section>
    )
}