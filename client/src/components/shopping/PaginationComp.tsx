import { useNavigate } from "react-router-dom"
import { useCalcButtonsPagination } from "../../hooks/calcButtonsPagination"
import { useProductsByCategory } from "../../hooks/productsByCategoryHook"

interface PaginationProps {
    length: number
}
export default function PaginationComp({
    length
}: PaginationProps){
    const navigate = useNavigate()
    const btns = useCalcButtonsPagination(length, 8)
    const { valueCategory, valuePage } = useProductsByCategory()

    const clickPage = (i: number) => {
        navigate(`/productos?categoria=${valueCategory}&pagina=${i}`)
    }
    return (
        <div
            className="flex gap-4 justify-center items-center py-2"
        >
            { Array.from({length: btns}, (_ , i)=>(
                <div
                    key={i}
                    className="aspect-square relative w-6"
                >
                    <button 
                        className={`
                            ${ Number(valuePage) == i + 1 ? 'dark:bg-yume-secondary-bold bg-yume-primary-bold' : 'bg-transparent' }
                            absolute w-full h-full outline outline-2 outline-yume-primary dark:outline-yume-secondary font-semibold rounded-full text-xs
                            hover:dark:bg-yume-secondary-muted
                        `}
                        onClick={()=>clickPage(i+1)}
                    >
                        { i + 1}
                </button>
                </div>
            ))}
        </div>
    )
}