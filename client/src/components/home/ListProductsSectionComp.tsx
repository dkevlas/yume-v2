import { useProductFilterRandom } from "../../hooks/productFilterRandomHook"

export default function ListProductsSectionComp(){
    const { productsRandoms } = useProductFilterRandom()
    const data: any[] = productsRandoms?.data
    console.log(data)
    return (
        <ul className="
            flex gap-4 flex-wrap justify-center py-4
            md:grid md:grid-cols-4
        ">
            { data && data.map((p, index) => (
                <li 
                    key={index}
                    className="
                        dark:bg-yume-deep relative aspect-square max-w-[250px] md:max-w-full border-2
                        flex-grow basis-[150px] sm:basis-[180px]
                        dark:border-yume-secondary border-yume-primary
                    "
                >
                    <div
                        className="
                            absolute overflow-hidden w-[90%] h-[90%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        "
                    >
                        
                        <img 
                            className="w-full h-full object-cover object-top hover:scale-110 transition-transform cursor-pointer"
                            src={p.thumbnail} 
                            alt={`${p.title}`} 
                        />
                    </div>
                </li>
            ))}
        </ul>
    )
}