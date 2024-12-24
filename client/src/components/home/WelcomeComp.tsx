import { Link } from "react-router-dom";

export default function WelcomeComp(){
    return (
        <header className="flex flex-col md:flex-row items-center justify-between p-6 md:p-8">
            <div className="flex-1 text-center mb-6 md:mb-0">
                <img src="https://media.revistavanityfair.es/photos/673487be16a9f1dbcb33759c/master/w_3940%2Cc_limit/VF1224-VF-Hollywood-Portfolio-13.jpg" alt="Imagen Anime" className="max-w-full h-auto mx-auto max-h-[450px]"/>
            </div>
            <div className="flex-1 text-center md:text-left md:pl-8">
                <div className="lg:w-[90%]">
                    <h1 className="text-3xl md:text-4xl font-semibold mb-4 dark:text-yume-neutral text-yume-deep">¡Bienvenido al Mundo de Yume!</h1>
                    <p className="text-lg text-pretty dark:text-yume-neutral-bold text-yume-deep mb-6">Sumérgete en una aventura épica donde héroes y villanos luchan por el destino del universo.</p>
                    <Link to={'/productos?categoria=todo&pagina=1'} className="inline-block py-3 px-6 rounded-lg text-lg transition duration-300 outline outline-2 outline-yume-primary hover:bg-yume-primary hover:text-yume-neutral-bold dark:outline-yume-secondary hover:dark:bg-yume-secondary dark:text-yume-secondary hover:dark:text-yume-neutral text-yume-primary">
                        Descubre Más
                    </Link>
                </div>
            </div>
        </header>
    )
}