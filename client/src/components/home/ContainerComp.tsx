import { ReactNode } from "react";

interface ContainerCompProps{
    children: ReactNode,
    styles?: string
}

export default function ContainerComp({
    children, styles
}: ContainerCompProps){
    return (
        <div
            className={`
                ${styles}
                p-4
            `}
        >
            {children}
        </div>
    )
};