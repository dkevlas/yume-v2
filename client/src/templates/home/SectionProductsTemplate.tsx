import ContainerComp from "../../components/home/ContainerComp";
import ListProductsSectionComp from "../../components/home/ListProductsSectionComp";
import SubtitleHomeComp from "../../components/home/SubtitleHomeComp";

interface SectionProductsProps{
    subtitle?: string,
    styles?: string
}

export default function SectionProductsTemplate({
    subtitle, styles
}: SectionProductsProps){
    return (
        <section className={`${styles}`} >
            <ContainerComp>
                <SubtitleHomeComp subtitle={subtitle ? subtitle : ""} />
                <ListProductsSectionComp />
            </ContainerComp>
        </section>
    )
}