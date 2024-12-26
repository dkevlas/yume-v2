import { BenefitsPayment, BenefitsShipping } from "../components/product/BenefitsShippingPaymentComp";
import Layout from "../Layout";
import SectionProductsTemplate from "../templates/home/SectionProductsTemplate";
import ProductDetailsTemplate from "../templates/product/ProductDetailsTemplate";

export default function ProductPage(){
    return (
        <Layout as={"section"} className="px-0">
            <ProductDetailsTemplate />
            <BenefitsShipping />
            <SectionProductsTemplate subtitle="Explora Más" />
            <BenefitsPayment />
        </Layout>
    )
}