import { ReactNode } from "react"

interface ContainerFooterProps {
    children: ReactNode,
    styles?: string
}
export default function ContainerFooterComp({
    children, styles
}: ContainerFooterProps){
    return (
        <footer
            className={`
                flex flex-col items-center gap-2 sm:gap-6 py-4
                ${styles}
            `}
        >
            {children}
            
        </footer>
    )
}