import { useNavigate } from "react-router-dom"
import { useProductsRandoms } from "../../hooks/productsRandomsHook"

export default function ListProductsSectionComp(){
    const { productsRandoms } = useProductsRandoms()
    const navigation = useNavigate()
    return (
        <ul className="
            flex gap-8 flex-wrap justify-center
            md:grid md:grid-cols-4
        ">
            { productsRandoms && productsRandoms.data?.map((p, index) => (
                <li 
                    key={index}
                    className="
                        dark:bg-yume-deep relative aspect-square max-w-[250px] md:max-w-full border-2
                        flex-grow basis-[150px] sm:basis-[180px]
                        dark:border-yume-secondary border-yume-primary
                    "
                >
                    <div
                        className=" absolute overflow-hidden w-[90%] h-[90%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    >
                        
                        <img 
                            className="w-full h-full object-cover object-top hover:scale-110 transition-transform cursor-pointer"
                            src={p.thumbnail} 
                            alt={p.title} 
                            onClick={()=>{
                                navigation(`/producto/${p.title}`)
                            }}
                        />
                    </div>
                </li>
            ))}
        </ul>
    )
}