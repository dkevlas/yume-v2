interface SubtitleHomeProps {
    subtitle: string,
    styles?: string
}
export default function SubtitleHomeComp({
    subtitle, styles
}: SubtitleHomeProps){
    return (
        <div
            className={`
                ${styles}
                text-center border-b-4 py-2
                border-b-yume-primary dark:border-b-yume-secondary
            `}
        >
            <h2
                className="
                    text-4xl font-semibold
                    text-yume-primary dark:text-yume-secondary
                "
            >
                {subtitle}
            </h2>
        </div>
    )
}