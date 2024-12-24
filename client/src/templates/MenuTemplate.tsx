import ContainerNavbarComp from "../components/others/ContainerNavbarComp";
import { ItemListDesktopComp } from "../components/others/ItemListComp";

import LogoComp from "../components/icos/LogoComp";
import ToggleTheme from "../themes/ToggleTheme";
import { IcoCartComp, IcoSearchComp } from "../components/icos/MoreIcosComp";
import { useNavigate } from "react-router-dom";
import { useCart } from "../hooks/cartHook";

const ItemsMenu = [
    { path: '/productos?categoria=todo&pagina=1', name: 'Productos'}
]

export default function MenuTemplate(){
    const navigate = useNavigate()
    const { state } = useCart()
    return (
        <div>
            <ContainerNavbarComp styles="h-16 px-4">
                <div className="w-10" >
                    <LogoComp styles="cursor-pointer" event={()=> navigate('/')} />
                </div>
                
                <div>
                    {/* <ItemListMobileComp /> */}
                    <ItemListDesktopComp dataMenu={ItemsMenu} />
                </div>
                <div className="flex gap-2 items-center">
                    <ToggleTheme stylesSVG="absolute" />
                    <IcoSearchComp />
                    <IcoCartComp number={state?.length} event={()=> navigate('/carrito')} />
                </div>
            </ContainerNavbarComp>
            <div className="absolute left-0 w-full h-16 top-0 z-[-1] bg-yume-primary dark:bg-yume-deep-bold border-b-2 border-yume-deep dark:border-yume-secondary"  />
        </div>
    )
}