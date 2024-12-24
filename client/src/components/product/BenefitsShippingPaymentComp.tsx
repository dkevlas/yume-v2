export function BenefitsShipping(){
    return (
        <div className="my-16 max-w-6xl mx-auto bg-yume-neutral dark:bg-yume-deep p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold dark:text-yume-neutral text-yume-deep mb-6">Beneficios de Entrega</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-3">
                <li>Envío rápido y seguro en todo el país</li>
                <li>Seguimiento en tiempo real de tu pedido</li>
                <li>Envío gratis en pedidos mayores a $50</li>
                <li>Opciones de entrega programada según tu conveniencia</li>
                <li>Devoluciones gratuitas dentro de los primeros 30 días</li>
            </ul>
        </div>
    )
}

export function BenefitsPayment(){
    return (
        <div className="my-16 max-w-6xl mx-auto bg-yume-neutral dark:bg-yume-deep p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold dark:text-yume-neutral text-yume-deep mb-6">Opciones de Pago</h2>
            <p className="text-lg text-gray-700 mb-4">Puedes pagar de forma segura a través de diversos métodos de pago:</p>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Tarjetas de Crédito/Débito</li>
                <li>PayPal</li>
                <li>Transferencia Bancaria</li>
                <li>Pago en efectivo contra entrega (solo en algunas regiones)</li>
            </ul>
        </div>
    )
}
