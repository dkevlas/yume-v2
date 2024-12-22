import React from "react"

interface ButtonEventProps{
    action?: string | React.ReactNode,
    styles?: string,
    event?: ()=>void,
    type?: "button" | "submit" | "reset"
}

export default function ButtonEventComp({
    action, styles, event, type
}: ButtonEventProps){
    return (
        <button
            type={ type || "button"}
            className={`
                max-w absolute top-2 left-2 bg-yume-neutral-bold rounded-md dark:bg-yume-deep
                ${styles}    
            `}
            onClick={event}
        >
            {action}
        </button>
    )
}