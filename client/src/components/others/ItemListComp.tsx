import { Link, NavLink } from "react-router-dom"
import { ItemsMenu } from "../../templates/MenuTemplate"

export function ItemListMobileComp(){
    return (
        <ul className="bg-blue-400">
            { ItemsMenu.map( (item, index) => (
                <li key={index}>
                    <Link to={item.path}>{item.link}</Link>
                </li>
            ))}
        </ul>
    )
}

export function ItemListDesktopComp(){
    return (
        <ul className="gap-4 flex">
            { ItemsMenu.map( (item, index) => (
                <li key={index}>
                    <NavLink 
                        className={({ isActive }) =>
                            `text-lg font-semibold ${
                                isActive ? 'dark:text-yume-neutral underline text-yume-deep-bold' : 'text-yume-deep-muted dark:text-yume-neutral-muted'
                            }`
                        }
                        to={item.path}
                    >{item.link}</NavLink>
                </li>
            ))}
        </ul>
    )
}