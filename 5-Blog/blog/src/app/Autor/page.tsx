import Header from '@/componentes/Header/head';
import ParteSuperior from '@/componentes/ParteSuperior3/partesuperior';
import Pe from '@/componentes/Rodapé/pé';
import { Metadata } from 'next';
import Link from 'next/link'


export const metadata: Metadata = {
    title: "Autor",
    icons: {
      icon: "/favicon.png",
    },
  };
  
function Autor(){
    return(
        <>
        <Header/>
        <ParteSuperior/>
        <Pe/>
        </>
    )
}

export default Autor