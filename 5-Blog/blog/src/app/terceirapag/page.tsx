import Header2 from '../segundapag/components2/Header2'
import Inferior from '../../components/inferior'
import Informacao3 from './components3/informacao3'
import Centro3 from '../terceirapag/components3/centro3'
import MaisDoAutor from './components3/maisDoAutor'
import Link from 'next/link'
import Image from 'next/image'

export default function SegundaPag() {


  return (
   <div>
   <Header2/>
    <Informacao3/>
    <Centro3/>
    <MaisDoAutor/>
    <Inferior/>
   </div>
  );
}
