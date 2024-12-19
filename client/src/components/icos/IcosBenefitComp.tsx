interface ContainerIcoBenefitProps{
    src: string
}

function ContainerIcoBenefit({
    src
}: ContainerIcoBenefitProps){
    return (
        <img
            className="absolute w-full h-full object-contain"
            src={src}
        />   
    )
}

export function BenefitSend(){
    return (
        <ContainerIcoBenefit
            src="/icos/paquete.png"
        />
    )
}

export function BenefitClient(){
    return (
        <ContainerIcoBenefit 
            src="/icos/atención-al-cliente.png"
        />
    )
}

export function BenefitWarranty(){
    return (
        <ContainerIcoBenefit 
            src="/icos/garantía.png"
        />
    )
}