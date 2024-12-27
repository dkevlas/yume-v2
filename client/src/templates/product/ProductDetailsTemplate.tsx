import { useEffect, useState } from "react"
import { Params, useParams } from "react-router-dom"
import { getProduct } from "../../services/ProductsService"
import { ResponseData, TypeData } from "../../interfaces/responseData.Interface"
import SliderImagesTemplate from "./SliderImagesTemplate"
import { useCart } from "../../hooks/cartHook"
import ProductNotFound from "../../components/product/ProductNotFount"

export default function ProductDetailsTemplate(){
    const { productID }:  Readonly<Params<string>> = useParams()
    const [ product, setProduct ] = useState<ResponseData | undefined>(undefined)
    const data: TypeData | undefined = product?.data?.[0]
    const { checkProductInCart } = useCart()
    useEffect(()=>{
        if(productID){
            getProduct(productID)
                .then(data=>{
                    setProduct(data)
                })
                .catch(err=>{
                    console.log(err)
                })
        }
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }, [productID])
    return (
        <div className="relative py-8"> 
            {
                product?.success == false ? <ProductNotFound /> :
                <SliderImagesTemplate
                    title={data?.title}
                    description={data?.description}
                    images={data?.images}
                    lengthImages={data?.images.length || 0}
                    id={data?._id}
                    isCheck={  checkProductInCart?.(data?._id)  }
                    price={data?.price}
                    img={data?.thumbnail}
                /> 
            }
        </div>
    )
}