import Image from 'next/image'
import Link from 'next/link'

function Header2() {

  return (
    <>
    <header>
    <div className='Header'>
        <li>
        <Link href="../../" ><h1><strong>AI</strong>TODAY</h1></Link>
        </li>
     <div className='pesquisar'>
     <h3>Pesquisar</h3>
     </div>
     </div>
     </header>
    </>
  )
}

export default Header2