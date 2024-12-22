import BenefitComp from "../../components/home/BenefitComp";
import ContainerComp from "../../components/home/ContainerComp";
import { BenefitClient, BenefitSend, BenefitWarranty } from "../../components/icos/IcosBenefitComp";
import { BenefitProps } from "../../interfaces/home/BenefitPropsInterface";

export default function InfoServicesTemplate(){
    const allServicesBenefit: BenefitProps[] = [
        {
            ico: <BenefitSend />,
            title: 'Envío gratis en todo Perú',
            description: 'Envío gratis en todas las compras'
        },
        {
            ico: <BenefitClient />,
            title: 'Atención al Cliente 24/7',
            description: 'Estamos aquí para ayudarte siempre'
        },
        {
            ico: <BenefitWarranty />,
            title: 'Garantía de Devolución',
            description: 'Reembolso si no estás satisfecho'
        }
    ]
    return (
        <section>
            <ContainerComp
                styles="flex justify-center"
            >
                <ul
                    className="flex flex-col gap-4 md:flex-row md:flex-wrap justify-center"
                >
                    {allServicesBenefit.map( (item, index) => (
                        <BenefitComp 
                            key={index}
                            title={item.title}
                            description={item.description}
                            ico={item.ico}
                        />
                    ))}
                </ul>
            </ContainerComp>
        </section>
    )
}