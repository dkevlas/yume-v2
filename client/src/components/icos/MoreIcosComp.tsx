import ContainerComp from "../home/ContainerComp";
interface MoreIcosProps{
    event?: ()=>void,
    styles?: string,
    number?: number
}

export function IcoBackComp(){
    return (
        <ContainerComp styles="px-1">
            <svg className="fill-yume-primary-bold dark:fill-yume-secondary-bold" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M360-240 120-480l240-240 56 56-144 144h568v80H272l144 144-56 56Z"/></svg>
        </ContainerComp>
    )
}

export function IcoSearchComp(){
    return (
        <ContainerComp>
            <svg className="cursor-pointer fill-yume-deep dark:fill-yume-neutral" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
        </ContainerComp>
    )
}

export function IcoCartComp({
    event, number
}: MoreIcosProps){
    return (
        <ContainerComp styles="relative">
            <strong className={`
            ${number ? "visible" : "hidden"}
                text-white bg-red-600 select-none text-center rounded-full w-6 h-6 font-bold absolute -top-3 -right-3
            `}>
                {number}
            </strong>
            <svg onClick={event} className="cursor-pointer fill-yume-deep dark:fill-yume-neutral" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg>
        </ContainerComp>
    )
}

export function IcoCartEmpty(){
    return (
        <ContainerComp styles="w-42">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-full" viewBox="0 0 64 64"> <circle cx="16" cy="48" r="6" fill="#333" /> <circle cx="48" cy="48" r="6" fill="#333" /> <path d="M12 12 L16 12 L18 36 L46 36 L48 12 L12 12" fill="none" stroke="#333" stroke-width="2"/> <path d="M18 36 L46 36" fill="none" stroke="#333" stroke-width="2"/> <path d="M12 12 L10 6" fill="none" stroke="#333" stroke-width="2"/> <path d="M48 12 L50 6" fill="none" stroke="#333" stroke-width="2"/> <path d="M20 36 L20 42 L44 42 L44 36" fill="none" stroke="#333" stroke-width="2"/> <path d="M20 42 L44 42" fill="none" stroke="#333" stroke-width="2"/> </svg>
        </ContainerComp>
    )
}