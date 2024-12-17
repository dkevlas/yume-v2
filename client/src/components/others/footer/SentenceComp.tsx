import LogoComp from "../LogoComp"

export default function SentenceComp(){
    return (
        <div className="text-center">
            <div
                className="w-[clamp(1.25rem,_1.027rem_+_0.595vw,_1.563rem)] mx-auto"
            >
                <LogoComp />
            </div>
            <p className="text-pretty text-[clamp(0.75rem,_0.482rem_+_0.714vw,_1.125rem)]">
                Donde el arte del anime cobra vida en cada figura
            </p>
        </div>
    )
}