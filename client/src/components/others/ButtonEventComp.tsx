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
                ${styles}    
            `}
            onClick={event}
        >
            {action}
        </button>
    )
}