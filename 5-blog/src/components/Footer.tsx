import InstagramLogo from "@/assets/instagramLogo.svg"
import Image from 'next/image'
import Logo from "./Logo"

export default function Footer() {
    return(
        <>
            <footer>
                <div className="footerContainer">
                    <p>Todos os direitos reservados</p>
                    <div className="socialContainer">
                        <Image src={InstagramLogo} alt=""  />
                        <p>GameNetwork</p>
                    </div>
                    <p>GameNetwork@hotmail.com</p>
                </div>
                <div className="logoFooter">
                    <Logo/>
                </div>

            </footer>
            
            
        </>
    )
};
