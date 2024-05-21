import './App.css'
import Logo from "./components/logo.png";
import { Button } from './components/Button';
import { Link } from 'react-router-dom';


function App() {

  return (
    <>
      <div className="logo">
        <img src={Logo} alt="imagem-da-logo" />
      </div>
      <div className="botoes">
        <Link to= "/App2">
          <Button 
            text='Começar a jogar'
            color="#0A3871"
            width="317px"
            textColor='#FFFFFF'
            height="105px"
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

        <Button 
          text='Adicionar nova palavra'
          color=" #F3F5FC"
          textColor='#0A3871'
          width="317px"
          height="105px"
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

export default App
