import React from 'react';
// COMPONENTS
import Profile from '@/components/Profile';
import NavBar from '@/components/NavBar';
import Card2 from '@/components/Card2';
// ASSETS
import profMaria from '@/assets/perfil-maria.png';
import card24 from '@/assets/card2-4.png';
import card25 from '@/assets/card2-5.png';


export default function Criador() {
  return (
    <div className='flex flex-col justify-between w-full h-full gap-3'>
      
      <Profile src={profMaria} alt='' name='Maria Oliveira' about='Meu nome é Maria Oliveira, tenho 21 anos e sou de salvador BA, desde pequena amo jogos e conexão que eles criam entre as pessoas.' />

      <div className='flex'>
        <Card2 src={card24} alt='.' title='StardewValley: Uma nova brisa' text='Depois de alguns anos, Stardew Valley continua sendo um clássico casual que agrada todos os gostos, este sucesso ocorre devido...' author='Maria Oliveira' date='24/05/2024' tag='jogos' />

        <Card2 src={card25} alt='.' title='Vale a pena criar jogos?' text='Que os jogos unem as pessoas não é novidade, mas este trabalho é bastante desafiado devido...' author='Maria Oliveira' date='24/05/2024' tag='jogos' />

        <Card2 src={card25} alt='.' title='Doom Eternal para quem tem TDAH' text='Uma mistura eletrizante entre combate rápido e viciante, Ultrakill é um jogo pra marcar suas jogatinas' author='Maria Oliveira' date='24/05/2024' tag='series' />
      </div>

      <a href='/'>Mais posts</a>

    </div>
  )
};
