import SentenceComp, { MediaSocialComp, CopyrigtComp, FastNavigationComp, NewsMessageComp } from "../components/others/ComponentsFooter";
import Layout from "../Layout";

export default function FooterTempalte(){
    return (
        <div className="bg-yume-primary-bold dark:bg-yume-deep-bold">
            <Layout as={"footer"} className="flex flex-col items-center gap-2 sm:gap-6 py-4">
                <SentenceComp />
                <div className="flex gap-4 sm:gap-8" >
                    <FastNavigationComp />
                    <MediaSocialComp />
                </div>
                <NewsMessageComp />
                <CopyrigtComp />
            </Layout>
        </div>
    )
}