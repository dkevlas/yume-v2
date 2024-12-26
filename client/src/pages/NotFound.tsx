// import { useNavigate } from "react-router-dom";
// import { GhostComp } from "../components/icos/IcosNotFoundComp";

export default function NotFound(){
    // const navigate = useNavigate()
    return (
<div className="min-h-screen bg-gray-100 px-4 py-16 flex flex-col justify-center items-center">

    <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full text-center">

        <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 text-gray-400 mx-auto mb-6" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M10 2a8 8 0 11-8 8 8 8 0 018-8zm0 2a6 6 0 100 12 6 6 0 000-12z" clip-rule="evenodd" />
        </svg>

  
        <h1 className="text-4xl font-semibold text-gray-800">Oops! Página no encontrada</h1>
        <p className="text-gray-600 mt-4">La página que buscas no existe o ha sido movida. No te preocupes, ¡puedes regresar a la página de inicio!</p>


        <div className="mt-6">
            <a href="/" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300">
                Regresar al inicio
            </a>
        </div>

        <div className="mt-8 text-gray-500">
            <p>O si prefieres, explora algunas de nuestras secciones populares:</p>
            <div className="mt-4">
                <ul className="space-y-2">
                    <li><a href="/productos" className="text-blue-600 hover:underline">Productos</a></li>
                    <li><a href="/contacto" className="text-blue-600 hover:underline">Contáctanos</a></li>
                    <li><a href="/blog" className="text-blue-600 hover:underline">Blog</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>


    )
}






// <section 
// classNameName="
//     bg-yume-neutral-bold flex relative flex-col justify-center items-center gap-6 dark:bg-yume-deep-muted min-h-[clamp(30rem,_24.205rem_+_15.455vw,_40.625rem)] text-red-600 text-4xl"
// >
// <span classNameName="dark:text-yume-secondary text-yume-primary text-[clamp(3.125rem,_2.375rem_+_3vw,_5rem)]">
//     Error 404
// </span>
// <div classNameName="w-52">
//     <GhostComp />
// </div>
// <button 
//     classNameName="
//         absolute right-4 bottom-4 text-xl outline outline-2 opacity-75 hover:opacity-100 active:scale-95
//         text-yume-primary dark:text-yume-secondary
//         outline-yume-primary dark:outline-yume-secondary px-2
//     "
//     onClick={()=>{
//         navigate('/')
//     }}
// >
//     Ir al inicio
// </button>
// </section>