import { useEffect, useState } from "react"
import { ChangeTheme, Theme } from "./ChangeTheme"
import { SVGdark, SVGlight} from "./SVGicons"

export default function ToggleTheme(){

    const isTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
    const themeCurrent = localStorage.getItem('theme')
    const [ theme, setTheme ] = useState<Theme | null>(themeCurrent as Theme)
    const [ showIcon, setShowIcon ] = useState<boolean>()
    useEffect(()=>{
        if(!theme){
            if(isTheme){
                ChangeTheme('dark')
            } else{
                ChangeTheme('light')
            }
        }
    })
    useEffect(()=>{
        if(theme){
            ChangeTheme(theme)
        }
        const htmlElement = document.documentElement;
        if(htmlElement.classList.contains('dark')){
            setShowIcon(true)
        } else{
            setShowIcon(false)
        }
        
    }, [theme])
    return (
        <div className="flex relative w-full aspect-square">
            <div
                className={`
                    ${showIcon ? 'opacity-100 z-[1]' : 'opacity-0 z-[-1]'}
                    w-full h-full aspect-square rounded-full cursor-pointer transition-opacity top-0 left-0 absolute
                `}
                onClick={()=>{
                    setTheme('light')
                    localStorage.setItem('theme', 'light')
                }}
            >
                <SVGlight />
            </div>
            <div
                className={`
                    ${showIcon ? 'opacity-0 z-[-1]' : 'opacity-100 z-[1]'}
                    w-full h-full aspect-square rounded-full cursor-pointer transition-opacity top-0 left-0 absolute
                `}
                onClick={()=>{
                    setTheme('dark')
                    localStorage.setItem('theme', 'dark')
                }}
            >
                <SVGdark />
            </div>
        </div>
    )
}
