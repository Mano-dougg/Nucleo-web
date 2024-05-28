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
        <h1>CHRIS PRINCE</h1>
        <Link href="/">Volta</Link>
        </>
    )
}

export default Autor