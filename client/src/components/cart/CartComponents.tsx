import { Link } from "react-router-dom"
import { IcoCartEmpty } from "../icos/MoreIcosComp"

interface CartComponentsProps{
    title?: string,
    description?: string
}

export function PaymentBenefitsComp(){
    return (
        <section className="text-center text-yume-deep dark:text-yume-neutral mb-8">
            <h2 className="text-xl font-semibold mb-4">Compra con confianza</h2>
            <ul className="list-none space-y-2">
                <li>Compra 100% segura.</li>
                <li>Envío rápido y confiable.</li>
                <li>Opciones de pago flexibles (tarjetas, PayPal, etc.)</li>
            </ul>
        </section>
    )
}

export function CartHeaderComp({
    title, description
}: CartComponentsProps){
    return (
        <header className="text-center mb-8">
            <h2 className="text-3xl font-semibold dark:text-yume-neutral-muted text-yume-deep-muted">
                {title}
            </h2>
            <p className="text-lg text-yume-deep-muted mt-2 dark:text-yume-neutral">
                {description}
            </p>
        </header>
    )
}

export function CartEmpty(){
    return (
        <div className="flex justify-center mb-6">
            <IcoCartEmpty />
        </div>
    )
}

export function ButtonsCTAComp(){
    return (
        <div className="flex space-x-4 justify-center mb-8">
            <Link to="/productos?categoria=todo&pagina=1" className="w-48 py-3 px-4 bg-yume-neutral text-yume-deep text-center rounded-lg hover:bg-yume-neutral-muted transition duration-300">Finalizar compra</Link>
            <Link to="/productos?categoria=todo&pagina=1" className="w-48 py-3 px-4 bg-yume-deep-muted text-yume-neutral text-center rounded-lg hover:bg-yume-deep transition duration-300">Seguir comprando</Link>
        </div>
    )
}