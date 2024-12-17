import ContainerFooterComp from "../components/others/footer/ContainerFooterComp";
import CopyrigtComp from "../components/others/footer/CopyrightComp";
import FastNavigationComp from "../components/others/footer/FastNavigationComp";
import MediaSocialComp from "../components/others/footer/MediaSocialComp";
import NewsMessageComp from "../components/others/footer/NewsMessageComp";
import SentenceComp from "../components/others/footer/SentenceComp";

export default function FooterTempalte(){
    return (
        <ContainerFooterComp>
            <SentenceComp />
            <div
                className="flex gap-4 sm:gap-8"
            >
                <FastNavigationComp />
                <MediaSocialComp />
            </div>
            <NewsMessageComp />
            <CopyrigtComp />
        </ContainerFooterComp>
    )
}