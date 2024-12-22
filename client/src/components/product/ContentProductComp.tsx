interface ContentProductProps{
    title?: string,
    description?: string,
    styles?: string
}

export default function ContentProductComp({
    title, description, styles
}: ContentProductProps){
    return (
        <div className={`
            ${styles}
            text-center md:text-start md:mt-4
        `}>
            <h3
                className="font-bold text-yume-primary dark:text-yume-secondary text-[clamp(1rem,_0.813rem_+_0.75vw,_1.375rem)]"
            >
                {title}
            </h3>
            <p
                className="dark:text-yume-neutral-muted md:w-[90%] text-pretty text-yume-deep-muted text-[clamp(0.875rem,_0.688rem_+_0.75vw,_1.25rem)]"
            >
                {description}
            </p>
        </div>
    )
}