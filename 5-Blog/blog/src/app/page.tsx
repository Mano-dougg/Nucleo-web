import './page.module.css'
import Header from '../components/header'
import Informacao1 from '../components/informacao1'
import Center from '../components/center'
import MaisAcessados from '../components/maisAcessadas'
import Inferior from '../components/inferior'


export default function Home() {

  return (
   <div>
   <Header/>
   <Informacao1/>
   <Center/>
    <MaisAcessados/>
    <Inferior/>
   </div>
  );
}
