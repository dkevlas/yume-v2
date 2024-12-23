import { ResponseData } from "../../interfaces/responseData.Interface"
import CardProductTemplate from "../../templates/shopping/CardProductTemplate"

interface ShowProductsFilteredProps {
    products: ResponseData | undefined
}
export default function ShowProductsFilteredComp({
    products
}: ShowProductsFilteredProps){
    return (
        <section>
            <ul className="grid pt-16 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
                { products?.data?.map((item, index)=>(
                    <CardProductTemplate
                        key={index}
                        title={item.title}
                        price={item.price}
                        img={item.thumbnail}
                        id={item._id}
                    />
                ))}
            </ul>
        </section>
    )
}