import Image from "next/image";
import { Inter } from "next/font/google";
// COMPONENTS
import Carousel from '@/components/Carousel';
import Card2 from '@/components/Card2';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center content-between ${inter.className}`}>
      <Carousel />

      <Card2 src={card21} alt='imagem 1' title='Doom Eternal para quem tem TDAH' text='TT' author='Maria Oliveira' date='24/05/2024' tag='jogos' />
      <Card2 src={card22} alt='imagem 1' title='Jogo baseado em LoveCraft' text='Essa nova abordagem dos contos de LoveCraft promete uma experiência sinistra. ' author='Maria Oliveira' date='24/05/2024' tag='jogos' />
      <Card2 src={card23} alt='imagem 1' title='Spore 2, será que vai?' text='Após decadas, os fãs do clássico Spore clamam por uma continuação.' author='Maria Oliveira' date='24/05/2024' tag='jogos' />
    </main>
  );
}
