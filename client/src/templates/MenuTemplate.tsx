import ContainerNavbarComp from "../components/others/ContainerNavbarComp";
import { ItemListDesktopComp } from "../components/others/ItemListComp";

import LogoComp from "../components/others/LogoComp";
import ToggleTheme from "../themes/ToggleTheme";

export const ItemsMenu = [
    { path: '/', link: 'Inicio' },
    { path: '/productos', link: 'Productos'},
    { path: '/contacto', link: 'Contacto'}
]

export default function MenuTemplate(){
    return (
        <div>
            <ContainerNavbarComp styles="h-16 px-4">
                <div className="w-10">
                    <LogoComp />
                </div>
                
                <div>
                    {/* <ItemListMobileComp /> */}
                    <ItemListDesktopComp />
                </div>
                <div className="w-6 aspect-square">
                    <ToggleTheme />
                </div>
                
            </ContainerNavbarComp>
            <div className="absolute left-0 w-full h-16 top-0 z-[-1] bg-yume-primary dark:bg-yume-deep-bold border-b-2 border-yume-deep dark:border-yume-secondary"  />
        </div>
    )
}