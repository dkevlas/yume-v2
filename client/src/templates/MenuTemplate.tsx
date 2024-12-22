import ContainerNavbarComp from "../components/others/ContainerNavbarComp";
import { ItemListDesktopComp } from "../components/others/ItemListComp";

import LogoComp from "../components/icos/LogoComp";
import ToggleTheme from "../themes/ToggleTheme";
import { IcoSearchComo } from "../components/icos/MoreIcosComp";

const ItemsMenu = [
    { path: '/', name: 'Inicio' },
    { path: '/productos?categoria=todo&pagina=1', name: 'Productos'}
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
                    <ItemListDesktopComp dataMenu={ItemsMenu} />
                </div>
                <div className="w-16 flex gap-4">
                    <div className="w-full">
                        <ToggleTheme />
                    </div>
                    <div className="w-full" >
                        <IcoSearchComo />
                    </div>
                </div>
            </ContainerNavbarComp>
            <div className="absolute left-0 w-full h-16 top-0 z-[-1] bg-yume-primary dark:bg-yume-deep-bold border-b-2 border-yume-deep dark:border-yume-secondary"  />
        </div>
    )
}