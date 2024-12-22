import { useNavigate } from "react-router-dom"
import ContentProductComp from "../../components/product/ContentProductComp"
import ButtonEventComp from "../../components/others/ButtonEventComp"
import { useEffect, useRef } from "react"
import LoadingComp from "../../components/others/LoadingComp"
import { IcoBackComp } from "../../components/icos/MoreIcosComp"

interface SliderImagesProps{
    images?: string[],
    title?: string,
    description?: string,
    lengthImages: number
}

export default function SliderImagesTemplate({
    title, description, lengthImages, images
}: SliderImagesProps){
    const navigate = useNavigate()
    const refSlider = useRef<HTMLDivElement>(null)

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
                />
            </section>
        )
    }
}