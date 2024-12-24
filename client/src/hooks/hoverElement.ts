import { useState } from "react"

export const useHoverElement = () => {
    const [ activeElement, setActiveElement ] = useState<boolean>(false)
    const mouseEnter = () => {
        return setActiveElement(true)
    }
    const mouseLeave = () => {
        return setActiveElement(false)
    }
    return { mouseEnter, mouseLeave, activeElement }
}