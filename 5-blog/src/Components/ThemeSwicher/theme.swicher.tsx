"use client"
import { useTheme } from 'next-themes'
import sun from '../(Header)/imgHeader/Sun.png'
import Image from 'next/image'

 export default function ThemeSwicher() {
    const {theme, setTheme} = useTheme()

    return(
    <Image onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        src={sun}
        width={40}
        height={40}
        alt="Picture of a Sun"
        />
    )
 }