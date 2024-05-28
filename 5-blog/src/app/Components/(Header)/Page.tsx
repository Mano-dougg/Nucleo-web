import Sun from './imgHeader/Sun.png'
import Search from './imgHeader/Search.png'
import Image from 'next/image';

export default function Header() {
    return (
      <>
      <header>
          <section>
            <h1> <span>AI</span>TODAY</h1>
          </section>
          <section>
            <article>
              <h2>Pesquisar</h2>
              <Image
                src={Search}
                width={32}
                height={32}
                alt="Search Bar icon"
              />
            </article>
            <article>
            <Image
                src={Sun}
                width={32}
                height={32}
                alt="Picture of a Sun"
              />
            </article>
          </section>
      </header>
      </>
    );
}
  