import { IcoSpinnerComp } from "../icos/IcosSpinnerComp"

interface LoadingProps {
    stylesContainer?: string,
    stylesSVG?: string,
    colorSVG?: string
}

export default function LoadingComp ({
    colorSVG
}: LoadingProps){
    colorSVG = 'red'
    return (
        <section
            className="
                mx-auto content-center h-1/2 w-52 min-h-[clamp(30rem,_24.205rem_+_15.455vw,_40.625rem)]
            "
        >
            <IcoSpinnerComp />
        </section>
    )
}