import Header from "../Header/Header.tsx";
import Hangman from "../Hangman/Hangman.tsx";
import Placar from "../Placar/Placar.tsx";
import Word from "../Word/Word.tsx";
import Teclado from "../Teclado/Teclado.tsx"
import { Page } from './gamepage.ts';



const Gamepage: React.FC = () => {
    return (
      <Page>

        <Header />

        <section className='corpo'>

        <div className='esquerdo'>
            <Hangman />
            <Word />
          </div>
          
          <div className='direito'>
            <Placar />
            <Teclado />
          </div>

        </section>

      </Page>
    );
  };
  
  export default Gamepage;