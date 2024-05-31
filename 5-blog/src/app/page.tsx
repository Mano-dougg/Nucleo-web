import Navigation from "@/components/Navigation";
import Image from "next/image";
import CardSection from "@/components/CardSection";
import { createClient } from "@/prismicio";
import Link from "next/link";

async function Home() {
  
  const client = createClient();
  const page = await client.getSingle("noticiaprincipal");

  return (
    <main>
      <Navigation />
      <h1 className="destaque">Em destaque:</h1>
        <div className="destaqueContainer">
        <Link href="/dashboard">
          <img
            src={page.data.imagemnoticia.url || ""}  
            width={609}
            height={306}
            alt={page.data.imagemnoticia.alt || ""}
          />
        </Link>
          <div className="destaqueText">
            <h1 className="tituloNoticiaDestaque">{page.data.titulonoticia}</h1>
            <h2 className="subNoticiaDestaque">{page.data.subtitulonoticia}</h2>
          </div>
        </div>
      

      <CardSection titulo="Novidades" />
      <CardSection titulo="Jogos" />
      <CardSection titulo="Filmes" />
      <CardSection titulo="Séries" />
    </main>
  );
}

export default Home;
