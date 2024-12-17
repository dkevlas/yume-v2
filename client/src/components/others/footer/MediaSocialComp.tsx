import { IcoFacebook, IcoInstagram, IcoTiktok, IcoWhatsapp } from "../IcosMediaSocial";

export default function MediaSocialComp(){
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
        <div className="">
            <span className="text-[clamp(0.938rem,_0.714rem_+_0.595vw,_1.25rem)] font-semibold">Únete</span>
            <ul className="grid grid-cols-2 gap-2 pt-2 sm:grid-cols-4">
                { icosMediasSocials.map( (item, index)=> (
                    <li key={index}>
                        {item.ico}
                    </li>
                ))}
            </ul>
        </div>
    )
}