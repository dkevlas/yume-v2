import { BenefitsPayment, BenefitsShipping } from "../components/product/BenefitsShippingPaymentComp";
import SectionProductsTemplate from "../templates/home/SectionProductsTemplate";
import ProductDetailsTemplate from "../templates/product/ProductDetailsTemplate";

export default function ProductPage(){
    return (
        <div>
            <ProductDetailsTemplate />
            <BenefitsShipping />
            <SectionProductsTemplate subtitle="Productos Relacionados" />
            <BenefitsPayment />
        </div>
    )
}