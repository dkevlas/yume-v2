export default function FastNavigationComp(){
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