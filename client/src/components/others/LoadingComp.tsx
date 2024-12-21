import { IcoSpinnerComp } from "../icos/IcosSpinnerComp"

export default function LoadingComp (){
    return (
        <section className=" mx-auto content-center h-1/2 w-52 min-h-[clamp(30rem,_24.205rem_+_15.455vw,_40.625rem)]">
            <IcoSpinnerComp />
        </section>
    )
}