export type Theme = 'light' | 'dark'

export const ChangeTheme = (theme: Theme) => {
    if(theme === 'dark'){
        document.querySelector("html")?.classList.add('dark')
    }
    if(theme === 'light'){
        document.querySelector("html")?.classList.remove('dark')
    }
}