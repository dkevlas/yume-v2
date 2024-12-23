import { useNavigate } from "react-router-dom"
import { ContentIMGComp, ContentTextCardComp } from "../../components/shopping/ContentCardComp"
import { useHoverElement } from "../../hooks/hoverElement"
import ButtonEventComp from "../../components/others/ButtonEventComp"
import { useCart } from "../../hooks/cartHook"

interface CardProductProps{
    title?: string,
    img?: string,
    price?: number,
    id?: string,
    itThisWithinCart?: boolean | undefined
}

export default function CardProductTemplate({
    title, img, price, id, itThisWithinCart
}: CardProductProps){
    const { dispatch } = useCart()
    const navigate = useNavigate()
    const showSlideImages = (title?: string) => {
        navigate(`/producto/${title}`)
    }
    const { activeElement, mouseEnter, mouseLeave} = useHoverElement()
    return (
        <li
            className={`
                max-w-[300px] w-full sm:max-w-none
                shadow-yume-primary dark:shadow-yume-secondary
                outline outline-2 outline-yume-primary dark:outline-yume-secondary relative
            `}
        >
            <div className={` ${activeElement ? 'shadow-md' : 'opacity-90'}`}
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
            >
                <ContentIMGComp 
                    title={title}
                    img={img}
                    activeEvent={activeElement}
                    showImages={()=>showSlideImages(title)}
                />
                <ContentTextCardComp 
                    title={title}
                    price={price}
                    id={id}
                    img={img}
                    activeEvent={activeElement}
                />
                <ButtonEventComp
                    action={`${itThisWithinCart ? "🗑": "🛒"}`}
                    styles={`
                        ${itThisWithinCart ? "bg-yume-secondary-muted" : "bg-yume-primary-muted"}
                        text-2xl active:scale-95 p-1 rounded-full absolute top-2 right-2 shadow-sm shadow-yume-neutral-bold    
                    `} 
                    event={()=>{
                        if(itThisWithinCart){
                            dispatch?.({
                                type: "remove", 
                                value: {
                                    id: id
                                }
                            })
                        }else{
                            dispatch?.({
                                type: "add",
                                value: {
                                    id: id,
                                    title: title,
                                    price: price,
                                    img: img
                                }
                            })
                        }
                    }}
                />
            </div>
        </li>
    )
}
