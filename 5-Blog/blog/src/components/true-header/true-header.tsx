import { useState } from "react";
import Header from "../header/header";
import Menu from "../menu/menu";
import { createClient } from "@/prismicio";


export default async function TrueHeader(){
    
    const client = createClient()
    const settings = await client.getSingle('home')


    return(
        <>
            <Header logo={settings.data.site_title || ''} />
        </>
    )
}