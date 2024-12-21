import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { optionsCategory } from "./ValuesQuerys"
import { useProductsByCategory } from "../../hooks/productsByCategoryHook"

export default function ButtonFilterComp(){
    const { valueCategory } = useProductsByCategory()
    const navigate = useNavigate()
    const [ optionCurrent, setOptionCurrent ] = useState<string | null | undefined>(valueCategory)

    const changeValueRoute = (event: React.ChangeEvent<HTMLSelectElement>) =>{
        const option = event.target.value
        setOptionCurrent(option)
        navigate(`/productos?categoria=${option}&pagina=1`)
    }

    return (
        <div className="absolute top-2 right-2 flex gap-4">
            <label className="font-semibold" htmlFor="category" >
                Categoría:
            </label>
            <select
                id="category"
                className="
                    dark:bg-yume-secondary bg-yume-primary px-2 rounded-sm  font-semibold outline-none cursor-pointer
                "
                value={optionCurrent || 'LISA'}
                onChange={changeValueRoute}
            >
                { optionsCategory.map( (item, index)=> (
                    <option
                        key={index}
                        value={item.value}
                        className="font-semibold active:bg-slate-600r"
                    >
                        {item.name}
                    </option>
                ))}
            </select>
        </div>
    )
}