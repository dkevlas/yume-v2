import Layout from "../../Layout"
import SubtitleHomeComp from "./SubtitleHomeComp"

export default function QuestionComp(){
    return (
        <Layout as={"section"} className="py-16 px-6">
            <SubtitleHomeComp subtitle="Preguntas Frecuentes" />
            <div className="space-y-6">
                <div className="bg-transparent shadow-sm  p-6 rounded-lg shadow-yume-primary dark:shadow-yume-secondary">
                    <h3 className="text-xl font-semibold text-yume-deep dark:text-yume-neutral mb-2">¿Cómo puedo comprar productos?</h3>
                    <p className="dark:text-yume-neutral-muted text-yume-deep-muted">Para comprar productos, simplemente selecciona el artículo que deseas y haz clic en el botón "Comprar Ahora". Te guiaremos a través del proceso de pago.</p>
                </div>
                <div className="bg-transparent shadow-sm  p-6 rounded-lg shadow-yume-primary dark:shadow-yume-secondary">
                    <h3 className="text-xl font-semibold text-yume-deep dark:text-yume-neutral mb-2">¿Hacen envíos internacionales?</h3>
                    <p className="dark:text-yume-neutral-muted text-yume-deep-muted">Sí, realizamos envíos a todo el mundo. Asegúrate de ingresar tu dirección correctamente durante el proceso de compra.</p>
                </div>
                <div className="bg-transparent shadow-sm  p-6 rounded-lg shadow-yume-primary dark:shadow-yume-secondary">
                    <h3 className="text-xl font-semibold text-yume-deep dark:text-yume-neutral mb-2">¿Ofrecen descuentos por compras grandes?</h3>
                    <p className="dark:text-yume-neutral-muted text-yume-deep-muted">Sí, ofrecemos descuentos especiales para compras al por mayor. Contáctanos para más detalles.</p>
                </div>
            </div>
        </Layout>
    )
}