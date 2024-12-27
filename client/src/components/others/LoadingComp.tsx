import { IcoSpinnerComp } from "../icos/IcosSpinnerComp"

export default function LoadingComp (){
    return (
        <div className=" mx-auto content-center h-1/2 w-24 min-h-[clamp(30rem,_24.205rem_+_15.455vw,_40.625rem)]">
                <IcoSpinnerComp />
        </div>
    )
}