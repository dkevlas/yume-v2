import { useNavigate } from "react-router-dom"
import { ContentIMGComp, ContentTextCardComp } from "../../components/shopping/ContentCardComp"
import { useHoverElement } from "../../hooks/hoverElement"

interface CardProductProps{
    title?: string,
    description?: string,
    img?: string,
    price?: number,
    id?: string,
    images?: string[],
}

export default function CardProductTemplate({
    title, img, price
}: CardProductProps){
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
                outline outline-2 outline-yume-primary dark:outline-yume-secondary
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
                />
            </div>
        </li>
    )
}
