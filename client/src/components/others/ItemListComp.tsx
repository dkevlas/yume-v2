import { Link, NavLink } from "react-router-dom"

interface ListMenu{
    dataMenu: {
        path: string,
        name: string
    }[]
}

export function ItemListMobileComp({
    dataMenu
}: ListMenu){

    return (
        <ul className="bg-blue-400">
            { dataMenu.map( (item, index) => (
                <li key={index}>
                    <Link to={item.path}>
                        {item.name}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export function ItemListDesktopComp({
    dataMenu
}: ListMenu){
    return (
        <ul className="gap-4 flex">
            { dataMenu.map( (item, index) => (
                <li key={index}>
                    <NavLink 
                        className={({ isActive }) =>
                            `text-lg font-semibold ${
                                isActive ? 'dark:text-yume-neutral underline text-yume-deep-bold' : 'text-yume-deep-muted dark:text-yume-neutral-muted'
                            }`
                        }
                        to={item.path}
                    >
                        {item.name}
                    </NavLink>
                </li>
            ))}
        </ul>
    )
}