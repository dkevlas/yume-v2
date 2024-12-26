import { IcoFacebook, IcoInstagram, IcoTiktok, IcoWhatsapp } from "../icos/IcosMediaSocial"
import LogoComp from "../icos/LogoComp"

export function FastNavigationComp(){
    const linkItem = [
        {
            link: 'Inicio',
            path: '/'
        },
        {
            link: 'Productos',
            path: ''
        },
        {
            link: 'Contacto',
            path: ''
        }
    ]
    return (
        <div className="px-2">
            <span className="underline text-[clamp(0.938rem,_0.714rem_+_0.595vw,_1.25rem)] font-semibold">
                Navegación rápida
            </span>
            <ul>
                {linkItem.map( (item, index)=>(
                    <li key={index}
                        className="cursor-pointer text-[clamp(0.875rem,_0.696rem_+_0.476vw,_1.125rem)] hover:underline"
                    >
                        {item.link}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export function CopyrigtComp(){
    return (
        <div className="">
            <span className="text-[clamp(0.75rem,_0.571rem_+_0.476vw,_1rem)]">
                Copyright 2024 © Yume Inc
            </span>
        </div>
    )
}


export function MediaSocialComp(){
    const icosMediasSocials = [
        {
            name: 'Facebook',
            ico: <IcoFacebook />
        },
        {
            name: 'Instagram',
            ico: <IcoInstagram />
        },
        {
            name: 'WhatsApp',
            ico: <IcoWhatsapp />
        },
        {
            name: 'Tiktok',
            ico: <IcoTiktok />
        }
    ]
    return (
        <div className="px-2">
            <span className="text-[clamp(0.938rem,_0.714rem_+_0.595vw,_1.25rem)] underline font-semibold">Únete</span>
            <ul className="grid grid-cols-2 gap-2 pt-2 sm:grid-cols-4">
                { icosMediasSocials.map( (item, index)=> (
                    <li className="cursor-pointer" key={index}>
                        {item.ico}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export function NewsMessageComp(){
    return (
        <div className="px-2 text-center">
            <h4 className="underline font-semibold text-[clamp(0.938rem,_0.714rem_+_0.595vw,_1.25rem)]">
                Mantente al día con nuestras novedades
            </h4>
            <p className="text-[clamp(0.75rem,_0.482rem_+_0.714vw,_1.125rem)] text-pretty">
                Novedades de figuras, promociones y más. ¡Únete a nuestra comunidad!
            </p>
        </div>
    )
}

export default function SentenceComp(){
    return (
        <div className="text-center">
            <div
                className="w-[clamp(1.25rem,_1.027rem_+_0.595vw,_1.563rem)] mx-auto"
            >
                <LogoComp />
            </div>
            <p className="text-pretty text-[clamp(0.75rem,_0.482rem_+_0.714vw,_1.125rem)]">
                Donde el arte del anime cobra vida en cada figura
            </p>
        </div>
    )
}