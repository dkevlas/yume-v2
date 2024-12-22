import React from "react";

export default function ListContainerComp({
    children
}: {children: React.ReactNode}){
    return (
        <section>
            <ul className="grid pt-16 justify-items-center sm:grid-cols-2 lg:grid-cols-4 gap-4 py-6 px-8">
                {children}
            </ul>
        </section>
    )
}