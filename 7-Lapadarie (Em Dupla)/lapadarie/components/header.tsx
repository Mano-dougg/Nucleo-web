import Image from 'next/image'
import Logo from '../img/logo.png'


export default function header(){
return(
    <header>
        <div className="logo">
        <Image src={Logo} alt=""></Image>
        </div>
    </header>
)
}