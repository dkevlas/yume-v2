import { useNavigate } from "react-router-dom"
import ContentProductComp from "../../components/product/ContentProductComp"
import ButtonEventComp from "../../components/others/ButtonEventComp"
import { useEffect, useRef } from "react"
import LoadingComp from "../../components/others/LoadingComp"
import { IcoBackComp } from "../../components/icos/MoreIcosComp"
import { useCart } from "../../hooks/cartHook"

interface SliderImagesProps{
    id?: string,
    images?: string[],
    title?: string,
    description?: string,
    lengthImages: number,
    img?: string,
    price?: number,
    isCheck?: boolean
}

export default function SliderImagesTemplate({
    title, description, lengthImages, images, id, img, price, isCheck
}: SliderImagesProps){
    const navigate = useNavigate()
    const refSlider = useRef<HTMLDivElement>(null)
    const { dispatch } = useCart()
    useEffect(()=>{
        if(refSlider.current){
            refSlider.current.style.width = `${lengthImages * 100}%`
        }
    }, [lengthImages])
    if(lengthImages === 0){
        return <LoadingComp />
    } else {
        return (
            <section className="mt-2 px-4 w-full max-h-full flex flex-col md:flex-row gap-4 items-center md:justify-center md:items-start">
                <ContentProductComp 
                    title={title}
                    description={description}
                    price={price}
                    children={
                        <ButtonEventComp 
                            styles={`${isCheck ? "outline-yume-secondary" : "outline-yume-primary"} outline outline-2 rounded-sm font-semibold py-1 px-3 text-[clamp(1rem,_0.821rem_+_0.476vw,_1.25rem)]`}                            
                            action={`${isCheck ? "Quitar del Carrito 🗑" : "Agregar al carrito 🛒"}`}
                            event={()=>{
                                if(isCheck){
                                    dispatch?.({
                                        type: "remove",
                                        value: {
                                            id: id
                                        }})
                                } else {
                                    dispatch?.({
                                        type: "add",
                                        value: {
                                            id: id,
                                            title: title,
                                            price: price,
                                            img: img
                                        }
                                    })
                                }
                            }}
                        />
                    }
                />
                <div className="relative w-[90%] max-w-[400px] aspect-square shadow-lg shadow-yume-primary dark:shadow-yume-secondary snap-mandatory snap-x overflow-x-auto">
                    <div ref={refSlider} className={`h-full absolute flex`}>
                        { images?.map((item, index)=> (
                            <div key={index} className="w-full snap-center">
                                <img 
                                    src={item}
                                    alt={`${title} - ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <ButtonEventComp
                    action={<IcoBackComp />}
                    event={()=> navigate(-1)}
                    styles="absolute max-w top-2 left-2 bg-yume-neutral-bold rounded-md dark:bg-yume-deep"
                />
            </section>
        )
    }
}