import "./App2.css"
import Logo from "./components/logo.png";
import { Button } from "./components/Button";
import { Link } from "react-router-dom";


export function App2 () {

    return (
        <>
          <div className="logo">
            <img src={Logo} alt="imagem-da-logo" />
          </div>
          
          <div className="regras">
            <h1>Regras</h1>
            <li>
              Você tem que acertar qual é a palavra proposta;
            </li>
            <li>
              Você tem 6 chances para acertar a palavra;
            </li>
            <li>
              A cada letra errada, é desenhado uma parte do corpo do enforcado;
            </li>
            <li>
              O jogo termina ou com o acerto da palavra ou com o término do preenchimento das partes corpóreas do enforcado.
            </li>
          </div>

          <div className="botoes-pagina-2">
            <Link to= "/App3">
              <Button 
                text='Avançar'
                color="#0A3871"
                width="332px"
                textColor='#FFFFFF'
                height="67px"
                padding="24px"
                gap="8px"
                borderRadius="24px"
                borderColor="#0A3871"
                borderWidth='none'
                borderStyle='none'
                fontSize="16px"
                fontWeight="400"
                lineHeight="19.36px"
                opacity="0px"
              />
            </Link>
    
            <Link to= "/">
              <Button 
                text='Cancelar'
                color=" #F3F5FC"
                textColor='#0A3871'
                width="332px"
                height="67px"
                padding="24px"
                gap="8px"
                borderRadius="24px"
                borderColor="#0A3871"
                borderWidth='1px'
                borderStyle = "solid"
                fontSize="16px"
                fontWeight="400"
                lineHeight="19.36px"
                opacity="0px"
              />
            </Link>
          </div>
          
        </>
    );
}