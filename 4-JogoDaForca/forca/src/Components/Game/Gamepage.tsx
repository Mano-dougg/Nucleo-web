import Header from "../Header/Header.tsx";
import Hangman from "../Hangman/Hangman.tsx";
import Placar from "../Placar/Placar.tsx";
import Word from "../Word/Word.tsx";
import Controle from "../Controle/Controle.tsx"
import { Page } from './gamepage.ts';



const Gamepage: React.FC = () => {
    return (
      <Page>

        <Header />

        <section className='corpo'>

        <div className='esquerdo'>
            <Hangman />
          </div>
          
          <div className='direito'>
            <Placar />
            <Word />
          </div>

        </section>

        <Controle />

      </Page>
    );
  };
  
  export default Gamepage;