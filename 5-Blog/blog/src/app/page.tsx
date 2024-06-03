import './page.css'
import Topo from '../components/Topo/topo'
import Rodape from '../components/Rodape/rodape'
import Link from 'next/link';

export default function Home() {
  return (

    <div className="principal">
      <Topo/>
      <Link href={'./Post'}><p>Vamos ao post</p></Link>
      <Link href={'./Perfil'}><p> Fala autor</p></Link>
      <Rodape />
    </div>

  );
}
