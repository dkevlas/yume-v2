import ContainerComp from "../../components/home/ContainerComp";
import ListProductsSectionComp from "../../components/home/ListProductsSectionComp";
import SubtitleHomeComp from "../../components/home/SubtitleHomeComp";

export default function SectionProductsTemplate(){
    return (
        <section
            className="bg-yume-neutral-bold dark:bg-yume-deep-muted"
        >
            <ContainerComp>
                <SubtitleHomeComp
                    subtitle="Mis Productos"
                />
                <ListProductsSectionComp />
            </ContainerComp>
        </section>
    )
}