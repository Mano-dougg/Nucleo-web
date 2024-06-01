import { createClient } from "@/prismicio";
import DiceIcon from "../icons/dice-icon";


export default async function Footer(){

    const client = createClient()

    const settings = await client.getSingle('home')

    return(
        <footer className="flex flex-col h-1/10 w-full bg-header pl-1 pr-1">
            <div className="flex flex-wrap justify-evenly text-sm">
                <span className="w-1/2 text-center">Todos os direitos reservados</span>
                <span className="w-1/2 text-center">{settings.data.site_title}</span>
                <span className="w-1/2 text-center">{settings.data.contact_email}</span>
            </div>
            <div className="a text-2xl pb-2 pl-1/20">
                <DiceIcon />
            </div>
        </footer>
    )
}