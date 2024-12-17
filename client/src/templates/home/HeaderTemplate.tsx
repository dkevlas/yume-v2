import ContainerComp from "../../components/home/ContainerComp";
import FigureComp from "../../components/home/FigureComp";
import WelcomeComp from "../../components/home/WelcomeComp";

export default function HeaderTemplate(){
    return (
        <header>
            <ContainerComp>
                <div
                    className="flex flex-col gap-4 justify-between items-center md:flex-row"
                >
                    <WelcomeComp />
                    <FigureComp />
                </div>
            </ContainerComp>
        </header>
    )
}