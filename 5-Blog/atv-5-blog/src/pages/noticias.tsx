import React from 'react';
import Image from 'next/image';
// COMPONENTS
import Arts from '@/components/Artcs';
// ASSETS
import cardNoticia from '@/assets/card-noticias.png';

export default function noticia() {
  return (
    <div>
      <Arts src={cardNoticia} title='Novo filme do predador' sectitle='O maior caçador do cinema está de volta' text={`Em entrevista para a Revista de jogos, o diretor Joaquim revelou que um personagem famoso está próximo de dar as caras no cinema novamete`} sectitletwo='E não apenas isso' texttwo={`O diretor também confirmou que a re-imaginação desse caçador iria dividir a comunidade. Todos os rumores apontam para um novo filme do predador, será que veremos esse clássico de volta?`} />
    </div>
  )
};
