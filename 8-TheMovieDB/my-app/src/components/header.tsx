
import Image from "next/image";
import '../styles/header.css';
import React from 'react'
import '../styles/global.css'
import FFNAME from '../assets/ff-name.webp'
import INTNAME from '../assets/int-name.png'


const Header: React.FC = () => {
  return (
    <body>
      <div className="container">
        <video className='video'src={require("../../public/int.mp4")} autoPlay  muted loop/>

        <nav>
          <ul>
            <h2>RianFlix.</h2>

            <div className="genre-list">
              <li>Ação</li>
              <li>Comédia</li>
              <li>Suspense</li>
              <li>Meus Favoritos</li>
            </div>

            <div className="search">
              <i className='bx bx-play'></i>
              <input type="text" placeholder="Pesquise aqui" />
            </div>
          </ul>
        </nav>

        <div className="banner">
          <div className="banner-content">
            <Image
              src={INTNAME}
              alt="Interstellar Name Poster"
            />

            <h4>
              <span>2014</span><span>10+</span><span>2h 49</span><span>Ficção Científica</span>
            </h4>

            <p>
              No futuro da Terra, uma praga global nas colheitas e um segundo Dust Bowl 
              estão lentamente a tornar o planeta inabitável. O Professor Brand (Michael Caine), 
              um físico brilhante da NASA, está a trabalhar em planos para salvar a humanidade, 
              transportando a população da Terra para um novo lar através de um buraco de minhoca. 
              Mas primeiro, Brand tem de enviar o ex-piloto da NASA Cooper (Matthew McConaughey) 
              e uma equipa de investigadores através do buraco de minhoca e através da galáxia 
              para descobrir qual dos três planetas poderá ser o novo lar da humanidade
            </p>
          </div>
        </div>
      </div>
    </body>
  )
}

export default Header;
