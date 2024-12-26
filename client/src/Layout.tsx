import React, { ElementType } from "react"

interface LayoutProps{
    as: ElementType,
    children: React.ReactNode,
    className?: string,
}

export default function Layout({
    as: Element = "div", children, className, ...props
}: LayoutProps){
    return (
        <Element className={`${className} max-w-screen-2xl mx-auto min-w-[300px] px-4`} {...props}>
            {children}
        </Element>
    )
}