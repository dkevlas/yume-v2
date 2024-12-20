interface ContentCardProps {
    title?: string,
    price?: number,
    img?: string,
    activeEvent?: boolean,
    showImages?: ()=> void
}

export function ContentTextCardComp({
    title, price
}: ContentCardProps){
    return (
        <div className="text-center pt-2">
            <h4 className="text-yume-primary dark:text-yume-secondary font-semibold text-[clamp(0.75rem,_0.625rem_+_0.5vw,_1rem)]">
                {title}
            </h4>
            <span className="font-bold text-[clamp(0.938rem,_0.813rem_+_0.5vw,_1.188rem)]">
                ${price?.toFixed(2)}
            </span>
        </div>
    )
}

export function ContentIMGComp({
    img, title, activeEvent, showImages
}: ContentCardProps){
    return (
        <div className="w-full aspect-square overflow-hidden" >
            <img
                className={`
                    ${activeEvent ? 'hover:scale-105' : ''} 
                    object-cover w-full h-full transition-transform cursor-pointer
                `}
                src={img} alt={title} 
                onClick={showImages}
            />
        </div>
    )
}