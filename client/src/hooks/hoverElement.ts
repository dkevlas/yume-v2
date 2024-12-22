import { useState } from "react"

export const useHoverElement = () => {
    const [ activeElement, setActiveElement ] = useState<boolean>(false)
    const mouseEnter = (e: React.MouseEvent<HTMLElement>) => {
        // e.currentTarget.style.backgroundColor = 'red'
        return setActiveElement(true)
    }
    const mouseLeave = (e: React.MouseEvent<HTMLElement>) => {
        // e.currentTarget.style.backgroundColor = 'transparent'
        return setActiveElement(false)
    }
    return { mouseEnter, mouseLeave, activeElement }
}