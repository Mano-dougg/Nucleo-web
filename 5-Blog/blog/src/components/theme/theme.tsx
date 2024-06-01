'use client'

import { useTheme } from "@/context/theme-context"
import darkImage from "@/images/bg_bggenerator_com_dark.jpg"


export default function ThemeStyle(){

    const { theme } = useTheme()

    return(
        <style>{theme==='dark' && 
        `:root {
            --header-bg: #32811b;
            --font: black;
            --font2: white; 
            --logo-color2: #73FEB3;
            --background1: #39640e;
            --background2: transparent;
            --background3: black;
            --background4: #3A4141;
            --DnD: #34B3FB;
            --tormenta: #C6C146;
            --vtm: #DF34FB;
            --homebrew: #FB3434;
        }
        
        body{
            background-image: url(${darkImage.src});
            background-repeat: repeat-y;
        }`}</style>
    )
}