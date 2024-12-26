import ListProductsSectionComp from "../../components/home/ListProductsSectionComp";
import SubtitleHomeComp from "../../components/home/SubtitleHomeComp";
import Layout from "../../Layout";

interface SectionProductsProps{
    subtitle?: string,
    styles?: string
}

export default function SectionProductsTemplate({
    subtitle, styles
}: SectionProductsProps){
    return (
        <Layout as={"section"} className={`${styles} min-w-[280px]`} >
            <SubtitleHomeComp subtitle={subtitle ? subtitle : ""} />
            <ListProductsSectionComp />
        </Layout>
    )
}