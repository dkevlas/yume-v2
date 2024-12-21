// import ButtonFilterComp from "../../components/shopping/ButtonFilterComp";
import ButtonFilterComp from "../../components/shopping/ButtonFilterComp";
import ListContainerComp from "../../components/shopping/ListContainerComp";
import PaginationComp from "../../components/shopping/PaginationComp";
import { useProductsByCategory } from "../../hooks/productsByCategoryHook";
import CardProductTemplate from "./CardProductTemplate";

export default function ProductFilterTemplate(){
    const { data } = useProductsByCategory()
    return(
        <section>
            <ButtonFilterComp />
            <ListContainerComp>
                { data?.data?.map((item, index)=>(
                    <CardProductTemplate 
                        key={index}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        img={item.thumbnail}
                        id={item._id}
                        images={item.images}
                    />
                ))}
            </ListContainerComp>
            <PaginationComp length={ data?.countDocuments ? data?.countDocuments : 0} />
        </section>
    )
}