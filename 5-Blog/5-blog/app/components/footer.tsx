import { FaInstagram } from "react-icons/fa";
import './footer.css'

export default function Footer(){
    return(
        <footer>
            <div className="main_div">
                <div className="rede_div">
                    <p>Todos os direitos reservados</p>
                    <div className="icone_insta">
                    <FaInstagram />
                    <p>GameNetwork</p>
                    </div>
                    <p>GameNetwork@hotmail.com</p>
                </div>

                <div className="logo_div">
                    <h1>Game<span>Network</span></h1>
                </div>
            </div>


        </footer>


    )
}