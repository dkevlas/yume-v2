import ButtonFilterComp from "../../components/shopping/ButtonFilterComp";
import ListContainerComp from "../../components/shopping/ListContainerComp";
import PaginationComp from "../../components/shopping/PaginationComp";
import { useCart } from "../../hooks/cartHook";
import { useProductsByCategory } from "../../hooks/productsByCategoryHook";
import Layout from "../../Layout";
import CardProductTemplate from "./CardProductTemplate";

export default function ProductFilterTemplate(){
    const { data } = useProductsByCategory()
    const { checkProductInCart } = useCart()
    return(
        <Layout as={"section"} className="relative">
            <ButtonFilterComp />
            <ListContainerComp>
                { data?.data?.map((item, index)=>{
                    const value = checkProductInCart?.(item._id)
                    return (
                        <CardProductTemplate 
                            key={index}
                            title={item.title}
                            price={item.price}
                            img={item.thumbnail}
                            id={item._id}
                            itThisWithinCart={value}
                        />
                    )
                })}
            </ListContainerComp>
            <PaginationComp length={ data?.countDocuments ? data?.countDocuments : 0} />
        </Layout>
    )
}