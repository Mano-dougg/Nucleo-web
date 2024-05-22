import Header from "../Header/Header.tsx";
import Hangman from "../Hangman/Hangman.tsx";
import Placar from "../Placar/Placar.tsx";
import Word from "../Word/Word.tsx";
import { Page } from './gamepage.ts';

const Gamepage: React.FC = () => {
    return (
      <Page>

        <Header />

        <section className='corpo'>
          <Hangman />
          
          <div className='direito'>
            <Placar />
            <Word />
          </div>

        </section>

      </Page>
    );
  };
  
  export default Gamepage;