import { Link } from "react-router-dom";

export default function ProductNotFound(){
    return (
        <div className="py-8">
            <div className="max-w-2xl mx-auto text-center dark:bg-yume-deep p-8 dark:shadow-yume-deep-muted rounded-lg shadow-lg">
                <div className="mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 fill-yume-deep-muted dark:fill-yume-neutral-muted mx-auto" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path d="M10 2a8 8 0 11-8 8 8 8 0 018-8zm0 2a6 6 0 100 12 6 6 0 000-12z" />
                    </svg>
                </div>
                <h2 className="text-3xl font-semibold text-yume-deep-muted dark:text-yume-neutral-muted mx-auto0">No encontramos lo que buscas</h2>
                <p className="text-yume-deep dark:text-yume-neutral-muted mt-4">Lo sentimos, parece que el producto que buscas no está disponible en este momento. No te preocupes, ¡tenemos muchas otras opciones interesantes!</p>
                
                <div className="mt-6">
                    <Link to={"/productos?categoria=todo&pagina=1"} className="inline-block bg-yume-primary dark:bg-yume-secondary text-white px-6 py-2 rounded-lg shadow-md hover:bg-yume-primary-bold dark:hover:bg-yume-secondary-bold focus:outline-none focus:ring-2 focus:ring-yume-primary-bold dark:focus:ring-yume-secondary-bold focus:ring-offset-2 transition duration-300">
                        Volver a la tienda
                    </Link>
                </div>
                <div className="mt-8 text-yume-deep dark:text-yume-neutral-muted ">
                    <p>Si deseas, puedes usar la barra de búsqueda para encontrar lo que necesitas, o explorar algunas de nuestras categorías más populares.</p>
                </div>
            </div>
        </div>
    )
}