import Corpo2Baixo from '@/componentes/Corpo2Baixo/corpo2Baixo';
import Corpo2Cima from '@/componentes/Corpo2/corpo2Cima';
import Header from '@/componentes/Header/head';
import Pe from '@/componentes/Rodapé/pé';
import { Metadata } from 'next';
import Link from 'next/link'
import Reverse from '@/componentes/ReverseCORPO/reverse';


export const metadata: Metadata = {
    title: "Post",
    icons: {
      icon: "/favicon.png",
    },
  };
  
function Post(){
    return(
        <>
        <Header/>
        <Corpo2Cima/>
        <Corpo2Baixo/>
        <Pe/>
        <Reverse/>
        </>
    )
}

export default Post