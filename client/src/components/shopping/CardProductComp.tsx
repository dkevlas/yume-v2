import { useEffect, useState } from "react"
import { useHoverElement } from "../../hooks/hoverElement"
import { ContentIMGComp, ContentTextCardComp } from "./ContentCardComp"

interface CardProductProps{
    title?: string,
    description?: string,
    img?: string,
    price?: number,
    id?: string,
    images?: string[]
}

export default function CardProductComp({
    title, img, price, id, images
}: CardProductProps){
    const [ showImages, setShowImages ] = useState<boolean>(false)
    const { mouseEnter, mouseLeave, activeElement} = useHoverElement()
    const showSlideImages = () => {
        console.log(images)
        setShowImages(!showImages)
    }
    useEffect(()=>{
        console.log('Lisa te amo: ',showImages)
    }, [showImages])
    return (
        <li   
            className={`
                ${!activeElement ? 'shadow-md' : 'hover:opacity-90'} 
                shadow-yume-primary dark:shadow-yume-secondary
                outline outline-2 outline-yume-primary dark:outline-yume-secondary
            `}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
        >
            <ContentIMGComp 
                img={img}
                title={title}
                activeEvent={activeElement}
                showImages={showSlideImages}
            />
            <ContentTextCardComp 
                title={title}
                price={price}
            />
            <div className={`
                    ${activeElement ? '' : ''} 
                    font-semibold rounded-md px-4 text-center mb-3 mt-1
                `}>
                <button
                    onClick={()=>{
                        console.log(id)
                        console.log()
                    }}
                    className={`
                        font-semibold rounded-md px-4 w-max border-2 text-[clamp(0.875rem,_0.813rem_+_0.25vw,_1rem)]
                        border-yume-primary dark:border-yume-secondary active:scale-95
                    `}
                >
                    Click
                </button>
            </div>
        </li>
    )
}