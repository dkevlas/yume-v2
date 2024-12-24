// import HeaderTemplate from "../templates/home/HeaderTemplate";
import InfoServicesTemplate from "../templates/home/InfoServices.Template";
import WelcomeComp from "../components/home/WelcomeComp";
import SectionProductsTemplate from "../templates/home/SectionProductsTemplate";
import ContactComp from "../components/home/ContactComp";
import QuestionComp from "../components/home/QuestionComp";

export default function HomePage(){
    return(
        <main className="flex flex-col gap-16">
            <WelcomeComp />
            <InfoServicesTemplate />
            <SectionProductsTemplate subtitle="Nuestros Productos" styles="py-16 px-6"/>
            <QuestionComp />
            <ContactComp />
        </main>
    )
}