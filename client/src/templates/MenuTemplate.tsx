import { ItemListDesktopComp } from "../components/others/ItemListComp";

import LogoComp from "../components/icos/LogoComp";
import ToggleTheme from "../themes/ToggleTheme";
import { IcoCartComp, IcoSearchComp } from "../components/icos/MoreIcosComp";
import { useNavigate } from "react-router-dom";
import { useCart } from "../hooks/cartHook";
import Layout from "../Layout";

const ItemsMenu = [
    { path: '/productos?categoria=todo&pagina=1', name: 'Productos'}
]

export default function MenuTemplate(){
    const navigate = useNavigate()
    const { state } = useCart()
    return (
        <div className="bg-yume-primary dark:bg-yume-deep-bold border-b-2 border-yume-deep dark:border-yume-secondary">
            <Layout as={"nav"} className="h-16 flex justify-between items-center">
                <div className="w-10">
                    <LogoComp styles="cursor-pointer" event={()=> navigate('/')} />
                </div>
                <div>
                    <ItemListDesktopComp dataMenu={ItemsMenu} />
                </div>
                <div className="flex gap-2 items-center">
                    <ToggleTheme stylesSVG="absolute" />
                    <IcoSearchComp />
                    <IcoCartComp number={state?.length} event={()=> navigate('/carrito')} />
                </div>
            </Layout>
        </div>
    )
}