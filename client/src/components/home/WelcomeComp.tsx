import { Link } from "react-router-dom";
import Layout from "../../Layout";

export default function WelcomeComp(){
    return (
        <Layout as={"header"} className="flex flex-col md:flex-row items-center justify-center gap-4 p-6 md:p-8">
            <div className="flex-1 text-center my-4 md:mb-0 w-[75%] aspect-[4/5] max-w-[320px] order-1 md:order-[0]">
                <img src="https://global-media-repository.s3.us-east-2.amazonaws.com/app-full-stack/yume-v2/darth-vader-figure.png" alt="Imagen Anime" className="max-w-full h-auto mx-auto max-h-[450px] mask-gradient"/>
            </div>
            <div className="flex-1 text-center md:text-left md:pl-8 md:max-w-[50%]">
                <div className="lg:w-[90%]">
                    <h1 className="text-3xl md:text-4xl font-semibold mb-4 dark:text-yume-neutral text-yume-deep">¡Bienvenido al Mundo de Yume!</h1>
                    <p className="text-lg text-pretty dark:text-yume-neutral-bold text-yume-deep mb-6">Sumérgete en una aventura épica donde héroes y villanos luchan por el destino del universo.</p>
                    <Link to={'/productos?categoria=todo&pagina=1'} className="inline-block py-3 px-6 rounded-lg text-lg transition duration-300 outline outline-2 outline-yume-primary hover:bg-yume-primary hover:text-yume-neutral-bold dark:outline-yume-secondary hover:dark:bg-yume-secondary dark:text-yume-secondary hover:dark:text-yume-neutral text-yume-primary">
                        Descubre Más
                    </Link>
                </div>
            </div>
        </Layout>
    )
}