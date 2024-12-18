import React from "react"

interface ContainerNavbarCompProps {
    children: React.ReactNode,
    styles?: string
}
export default function ContainerNavbarComp({
    children, styles
}: ContainerNavbarCompProps){
    return (
        <nav
            className={`
                ${styles}
                flex justify-between items-center   
            `}
        >
            {children}
        </nav>
    )
}