import { useEffect, useState } from "react"
import { ChangeTheme, Theme } from "./ChangeTheme"
import { SVGdark, SVGlight} from "./SVGicons"
interface ToggleThemeProps {
    styles?: string,
    stylesSVG?: string
}
export default function ToggleTheme({
    styles, stylesSVG
}: ToggleThemeProps){

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
        <div className={`
            ${styles}
            flex items-center justify-items-center relative w-6 aspect-square
        `}>
            <div
                className={`
                    ${stylesSVG}
                    ${showIcon ? 'opacity-100 z-[1]' : 'opacity-0 z-[-1]'}
                    aspect-square rounded-full cursor-pointer transition-opacity
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
                    ${stylesSVG}
                    ${showIcon ? 'opacity-0 z-[-1]' : 'opacity-100 z-[1]'}
                    aspect-square rounded-full cursor-pointer transition-opacity
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
