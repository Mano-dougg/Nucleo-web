import Image from "next/image"
import '../components/headerLogo.css'

export default function HeaderLogo(){
    return(
        <div className="logo">
            <Image
            src="/LogoLePadarie.PNG"
            width={100}
            height={90}
            alt="logo"/>
        </div>
    )
}
