'use client'

import SearchIcon from "@/components/icons/search-icon";
import { useState } from "react";
import Menu from "../menu/menu";
import "./hamburguer-animations.css"


export default function Header({ logo }:{logo:string}){
    const [ menu, setMenu] = useState(false);
    const toggleMenu = ()=>{setMenu(!menu)}

    const logoPart1:string = logo.split(' ').slice(0, -1).join(' ')
    const logoPart2:string = logo.split(' ').pop() || ''

    return(
        <>
        <header className="fixed top-0 flex justify-between items-center w-full h-1/20 bg-header pr-10 pl-10 z-20">
            <button className={`${menu?'active':''} hambutton`}
             onClick={toggleMenu}
             name="" id="">      
                <div className="hambutton__bar first hambutton-color"></div>
                <div className="hambutton__bar second hambutton-color"></div>
                <div className="hambutton__bar third hambutton-color"></div>
            </button>
            <h2 className="font-body">{logoPart1}<span className="text-logo-2"> {logoPart2}</span></h2>
            <div className="flex items-center h-1/2 rounded-xl bg-transparent lg:bg-white overflow-hidden">
                <input type="search" name="header-search" id="" className="hidden lg:inline-block h-full" />
                <SearchIcon />
            </div>
        </header>
        {menu && <Menu toggleMenu={toggleMenu} />}
        </>
    )
}