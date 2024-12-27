import { Link } from "react-router-dom";
import { GhostComp } from "../components/icos/IcosNotFoundComp";

export default function NotFound(){
    return (
        <div className="min-h-[600px] px-4 py-16 flex flex-col justify-center items-center">
            <div className="p-8 rounded-lg shadow-lg max-w-lg w-full text-center dark:shadow-yume-deep-bold">
                <div className="w-24 h-24 mx-auto mb-6">
                    <GhostComp />
                </div>
                <h2 className="text-4xl font-semibold text-yume-deep dark:text-yume-neutral">Oops! Página no encontrada</h2>
                <p className="dark:text-yume-neutral-muted text-yume-deep-muted mt-4">
                    La página que buscas no existe o ha sido movida. No te preocupes, ¡puedes regresar a la página de inicio!
                </p>
                <div className="mt-6">
                    <Link to="/" className="inline-block outline outline-2 opacity-75 hover:opacity-100 active:scale-95 text-yume-primary dark:text-yume-secondary px-6 py-2 rounded-lg shadow-md  focus:outline-none focus:ring-2 focus:ring-yume-primary dark:ring-yume-secondary focus:ring-offset-2 transition duration-300">
                        Regresar al inicio
                    </Link>
                </div>
            </div>
        </div>
    )
}