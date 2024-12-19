import { useNavigate } from "react-router-dom";
import { GhostComp } from "../components/icos/IcosNotFoundComp";

export default function NotFound(){
    const navigate = useNavigate()
    return (
        <section 
            className="
                bg-yume-neutral-bold flex relative flex-col justify-center items-center gap-6 dark:bg-yume-deep-muted min-h-[clamp(30rem,_24.205rem_+_15.455vw,_40.625rem)] text-red-600 text-4xl"
            >
            <span className="dark:text-yume-secondary text-yume-primary text-[clamp(3.125rem,_2.375rem_+_3vw,_5rem)]">
                Error 404
            </span>
            <div className="w-52">
                <GhostComp />
            </div>
            <button 
                className="
                    absolute right-4 bottom-4 text-xl outline outline-2 opacity-75 hover:opacity-100 active:scale-95
                    text-yume-primary dark:text-yume-secondary
                    outline-yume-primary dark:outline-yume-secondary px-2
                "
                onClick={()=>{
                    navigate('/')
                }}
            >
                Ir al inicio
            </button>
        </section>
    )
}