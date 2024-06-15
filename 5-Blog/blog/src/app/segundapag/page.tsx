import './page.module.css'
import Header2 from '../segundapag/components2/Header2'
import Informacao2 from '../segundapag/components2/informacao2'
import Inferior from '../../components/inferior'
import Centro2 from '../segundapag/components2/centro2'
import MaisPostagens from '../segundapag/components2/maisPostagens'

export default function SegundaPag() {
  return (
   <div>
   <Header2/>
   <Informacao2/>
   <Centro2/>
    <MaisPostagens/>
    <Inferior/>
   </div>
  );
}
