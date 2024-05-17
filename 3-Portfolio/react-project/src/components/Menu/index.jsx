import { useState } from "react";
import { Container, ContentMobile} from "./script";

function Menu() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () =>{
        setMenuOpen(!menuOpen);
    }

    return (
    
        <Container>
            <ContentMobile onClick={toggleMenu}>
                {menuOpen ? <img src="./public/menuopen.svg" /> : <img src="./public/menuclosed.svg" />}

            </ContentMobile>

            {menuOpen ? 
                <div>
                    <ul>
                        <li><a href="" >Section two</a></li>
                        <li><a href="" >Section three</a></li>                        
                        <li><a href="" >Section four</a></li>
                    </ul>

                    <div class='social'>
                        <a href="https://twitter.com" target="_blank"><img src="./public/twitter.svg" alt="Twitter" /></a>
                        <a href="https://figma.com" target="_blank"><img src="./public/figma.svg" alt="Figma" /></a>
                        <a href="https://www.instagram.com" target="_blank"><img src="./public/instagram.svg" alt="Instagram" /></a>
                    </div>
                </div>
            : <></>}
  
        </Container>
        
    )
}

export default Menu