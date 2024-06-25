'use client';
import Topo from "../components/Topo/topo";
import Base from "../components/Base/base"
import Lista from "../components/Lista/lista";
import './page.css'
import Carrossel from "../components/Carrossel/carrossel";


export default function Home() {
  return (
   <div className="main">
    

    <Topo />


    <div className="primeira-parte">

      <div className="inicio-esquerda">
        <p>
        Bem-vindo ao Omni: O Seu Portal Cinematográfico!
        </p>

        <p>
        O Omni é o seu destino definitivo para explorar o mundo do cinema. 
        Com uma vasta coleção de filmes, séries e documentários, o Omni oferece uma 
        experiência completa para os amantes da sétima arte.
        </p>

        <p>Onde a magia do cinema está a um clique de distância! 🎬✨</p>
      </div>

      <div className="carrossel-direita">
        <Carrossel />
      </div>

    </div>

    <div className="segunda-parte">
      <Lista />
    </div>

    <Base />

   </div>
  );
}
