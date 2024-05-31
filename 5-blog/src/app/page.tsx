import Navigation from "@/components/Navigation";
import highlightImage from "@/assets/imagem-noticia.png"
import Image from "next/image";
import CardSection from "@/components/CardSection";

export default function Home() {
  return (
    <main>
      <Navigation />
      <h1 className="destaque">Em destaque:</h1>
      <div className="destaqueContainer">
        <Image src={highlightImage} width={609} height={306} alt="Imagem da notícia em destaque"></Image>
        <div className="destaqueText">
          <h1 className="tituloNoticiaDestaque">Novo filme do Predador?</h1>
          <h2 className="subNoticiaDestaque">O maior caçador do cinema está de volta</h2>
        </div>
      </div>

      <CardSection titulo="Novidades"/>
      <CardSection titulo="Jogos"/>
      <CardSection titulo="Filmes"/>
      <CardSection titulo="Séries"/>
      
    </main>
  );
}
