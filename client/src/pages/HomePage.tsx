import HeaderTemplate from "../templates/home/HeaderTemplate";
import InfoServicesTemplate from "../templates/home/InfoServices.Template";
import SectionProductsTemplate from "../templates/home/SectionProductsTemplate";

export default function HomePage(){
    return(
        <main className="flex flex-col gap-8">
            <HeaderTemplate />
            <InfoServicesTemplate />
            <SectionProductsTemplate />
        </main>
    )
}