import "./App2.css"
import Logo from "./components/logo.png";
import { Button } from "./components/Button";

export function App2 () {

    return (
        <>
          <div className="logo">
            <img src={Logo} alt="imagem-da-logo" />
          </div>

          <div className="botoes-pagina-2">
            <Button 
              text='Salvar e começar'
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
          </div>
          
        </>
    );
}