import ContainerComp from "../home/ContainerComp";

export function IcoBackComp(){
    return (
        <ContainerComp styles="py-0 px-1">
            <svg className="fill-yume-primary-bold dark:fill-yume-secondary-bold" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M360-240 120-480l240-240 56 56-144 144h568v80H272l144 144-56 56Z"/></svg>
        </ContainerComp>
    )
}

export function IcoSearchComo(){
    return (
        <ContainerComp 
            styles="p-0"
        >
            <svg className="cursor-pointer fill-yume-deep dark:fill-yume-neutral" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#e8eaed"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
        </ContainerComp>
    )
}